import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getMonument, saveMonument } from "../services/offlineStorage";

const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function formatDistance(metres) {
  if (metres === null) return "";
  return metres < 1000 ? `${Math.round(metres)} m` : `${(metres / 1000).toFixed(1)} km`;
}

function bearingLabel(degrees) {
  return ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"][
    Math.round(degrees / 45) % 8
  ];
}

function calculateDistanceAndBearing(from, to) {
  const earthRadius = 6371000;
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const deltaLat = ((to.lat - from.lat) * Math.PI) / 180;
  const deltaLon = ((to.lng - from.lng) * Math.PI) / 180;
  const a = Math.sin(deltaLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  const distance = earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const bearing = (
    Math.atan2(
      Math.sin(deltaLon) * Math.cos(lat2),
      Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon)
    ) * 180 / Math.PI + 360
  ) % 360;
  return { distance, bearing };
}

export default function OfflineMap({ monument, onStatusChange }) {
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  const monumentMarkerRef = useRef(null);
  const userMarkerRef = useRef(null);
  const watchIdRef = useRef(null);
  const [mapStatus, setMapStatus] = useState(navigator.onLine ? "Available Online" : "Offline Map Not Downloaded");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState(null);
  const measurement = location
    ? calculateDistanceAndBearing(location, { lat: monument.latitude, lng: monument.longitude })
    : null;

  useEffect(() => {
    let cancelled = false;
    getMonument(monument.id)
      .then((saved) => {
        if (!cancelled && saved) setMapStatus(navigator.onLine ? "Available Online" : "Available Offline");
      })
      .catch(() => {
        if (!cancelled) setMessage("Offline storage is unavailable on this device.");
      });
    saveMonument(monument).catch(() => {
      if (!cancelled) setMessage("The location could not be saved for offline use.");
    });
    return () => { cancelled = true; };
  }, [monument]);

  useEffect(() => {
    if (!mapElement.current || mapRef.current) return undefined;
    const map = L.map(mapElement.current, { zoomControl: true }).setView([monument.latitude, monument.longitude], 15);
    const tiles = L.tileLayer(TILE_URL, { attribution: TILE_ATTRIBUTION, maxZoom: 19 });
    tiles.on("tileerror", () => setMessage("Map tiles could not be loaded. Previously cached monument data and GPS remain available."));
    tiles.addTo(map);
    monumentMarkerRef.current = L.marker([monument.latitude, monument.longitude])
      .addTo(map)
      .bindPopup(monument.name)
      .openPopup();
    mapRef.current = map;
    return () => {
      if (watchIdRef.current !== null && navigator.geolocation) navigator.geolocation.clearWatch(watchIdRef.current);
      map.remove();
      mapRef.current = null;
    };
  }, [monument]);

  useEffect(() => {
    const updateStatus = () => {
      const nextStatus = navigator.onLine ? "Available Online" : "Offline Map Not Downloaded";
      setMapStatus(nextStatus);
      onStatusChange?.(nextStatus);
    };
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, [onStatusChange]);

  const locateUser = () => {
    if (!navigator.geolocation) {
      setMessage("GPS is not available in this browser.");
      return;
    }
    setMessage("Requesting your current location...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const nextLocation = { lat: coords.latitude, lng: coords.longitude };
        setLocation(nextLocation);
        setMessage("");
        if (mapRef.current) mapRef.current.setView(nextLocation, 15);
        if (userMarkerRef.current) userMarkerRef.current.setLatLng(nextLocation);
        else userMarkerRef.current = L.circleMarker(nextLocation, { radius: 8, color: "#1d4ed8", fillColor: "#60a5fa", fillOpacity: 0.9 })
          .addTo(mapRef.current)
          .bindPopup("Your current location");
        if (watchIdRef.current === null) {
          watchIdRef.current = navigator.geolocation.watchPosition(({ coords: nextCoords }) => {
            setLocation({ lat: nextCoords.latitude, lng: nextCoords.longitude });
          }, () => {}, { enableHighAccuracy: true, maximumAge: 30000, timeout: 15000 });
        }
      },
      (error) => setMessage(error.code === error.PERMISSION_DENIED
        ? "Location permission was denied."
        : "Your current location is unavailable."),
      { enableHighAccuracy: true, maximumAge: 30000, timeout: 15000 }
    );
  };

  const requestOfflineMap = () => {
    setMessage("Offline tile downloads are not enabled for the public OpenStreetMap tile server. Choose a licensed offline tile provider to enable this.");
  };

  return (
    <div className="offline-map">
      <div ref={mapElement} className="offline-map-canvas" role="application" aria-label={`${monument.name} map`} />
      <div className="offline-map-controls">
        <button type="button" onClick={locateUser}>Current Location</button>
        <button type="button" onClick={requestOfflineMap}>Download Map for Offline Use</button>
        <span className="offline-map-status">● {mapStatus}</span>
      </div>
      {measurement && (
        <p className="offline-map-measurement">
          Distance: {formatDistance(measurement.distance)} · Direction: {bearingLabel(measurement.bearing)}
        </p>
      )}
      {message && <p className="offline-map-message" role="status">{message}</p>}
    </div>
  );
}
