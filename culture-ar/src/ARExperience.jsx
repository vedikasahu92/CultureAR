import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import BackButton from "./backbutton";

/* =========================================================
   MONUMENT DATABASE
========================================================= */

const monumentsDB = {

  /* ---------------- HAWA MAHAL ---------------- */

  hawamahal: {
    id: "hawamahal",
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",

    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hawa-mahal.jpg",

    history: `Hawa Mahal, also known as the Palace of Winds, is one of the most famous landmarks of Jaipur, Rajasthan.

It was built in 1799 by Maharaja Sawai Pratap Singh. The building has a distinctive five-storey facade with many small windows and jharokhas. These windows were designed to allow air to pass through the building, giving it the name Hawa Mahal.

The palace was connected with the City Palace complex and allowed royal women to observe everyday life, festivals and processions in the streets without being easily seen from outside.

Its architecture combines Rajput and Mughal influences and the pink sandstone facade has become one of the symbols of Jaipur.`,

    audio: `Hawa Mahal, also known as the Palace of Winds, is a famous monument in Jaipur, Rajasthan. It was built in 1799 by Maharaja Sawai Pratap Singh. Its five-storey facade contains many small windows and jharokhas that allow air to flow through the building. The palace also allowed royal women to observe city life and processions while remaining screened from public view.`
  },


  /* ---------------- TAJ MAHAL ---------------- */

  tajmahal: {
    id: "tajmahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",

    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Taj_Mahal_.jpg",

    history: `The Taj Mahal is a famous white-marble monument located on the banks of the Yamuna River in Agra, Uttar Pradesh.

It was commissioned by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. Construction began in the 17th century and the monument became one of the best-known examples of Mughal architecture.

The main mausoleum is built from white marble and is surrounded by a large garden, reflecting pools, a mosque and other structures. The design combines elements of Persian, Indian and Islamic architectural traditions.

The monument is especially known for its large central dome, four minarets, detailed marble decoration and symmetrical layout. The Taj Mahal is also part of the UNESCO World Heritage List.`,

    audio: `The Taj Mahal is a famous white marble monument in Agra, Uttar Pradesh. It was commissioned by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. The monument is known for its large central dome, four minarets, detailed marble decoration and symmetrical Mughal architecture.`
  },


  /* ---------------- CHITRAKOTE FALLS ---------------- */

  chitrakote: {
    id: "chitrakote",
    name: "Chitrakote Falls",
    location: "Bastar, Chhattisgarh",

    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chitrakote_Falls.jpg",

    history: `Chitrakote Falls is one of the most famous natural attractions of Chhattisgarh. It is located on the Indravati River in the Bastar region.

The waterfall is known for its wide horseshoe-shaped appearance and is often popularly called the "Niagara Falls of India".

During the monsoon season, the amount of water increases significantly and the waterfall becomes especially spectacular. The surrounding area contains forests and beautiful natural landscapes.

Chitrakote Falls is also closely connected with the cultural landscape of Bastar, a region known for its tribal traditions, handicrafts, music, dance and festivals.

The waterfall has become an important tourism destination for people visiting Bastar and exploring the natural and cultural heritage of Chhattisgarh.`,

    audio: `Chitrakote Falls is a famous waterfall located on the Indravati River in Bastar, Chhattisgarh. It is known for its wide horseshoe shape and is popularly called the Niagara Falls of India. During the monsoon season, the water flow becomes much stronger. The surrounding Bastar region is also famous for its tribal culture, handicrafts, music, dance and festivals.`
  },


  /* ---------------- BEKAL FORT ---------------- */

  bekalfort: {
    id: "bekalfort",
    name: "Bekal Fort",
    location: "Kasaragod, Kerala",

    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bekal_Fort,_Kerala.jpg",

    history: `Bekal Fort is a large coastal fort located in Kasaragod district of Kerala, overlooking the Arabian Sea.

The fort is associated with the history of the Keladi Nayakas and is generally linked with Shivappa Nayaka in the 17th century. Historical accounts also connect the fort with the Kolathiri rulers and later with the Mysore rulers.

Its massive laterite walls, observation points, defensive structures and location beside the Arabian Sea made it an important strategic fort.

Hyder Ali and Tipu Sultan of Mysore also controlled the region during the later history of the fort. After the fall of Tipu Sultan, the area came under British control.

Today, Bekal Fort is known for its historical architecture, sea views and its importance in the heritage of northern Kerala.`,

    audio: `Bekal Fort is a large coastal fort in Kasaragod, Kerala. It is associated with the Keladi Nayakas and the 17th century ruler Shivappa Nayaka. The fort stands beside the Arabian Sea and has massive laterite walls and defensive structures. The region later came under the control of the Mysore rulers and then the British.`
  },


  /* ---------------- MODHERA SUN TEMPLE ---------------- */

  modhera: {
    id: "modhera",
    name: "Modhera Sun Temple",
    location: "Modhera, Gujarat",

    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sun_Temple,_Modhera.jpg",

    history: `The Modhera Sun Temple is a historic temple dedicated to the Sun God Surya and is located in Modhera, Gujarat.

The temple was built in the early 11th century during the reign of Bhima I of the Chaulukya, or Solanki, dynasty.

The temple complex is famous for its detailed stone carvings and its carefully planned architectural design. It contains three major parts: the Surya Kund, the Sabha Mandap and the Gudha Mandap.

The Surya Kund is a large stepped reservoir containing numerous small shrines. The Sabha Mandap was used as an assembly hall, while the Gudha Mandap contains the main shrine area.

The temple is no longer used for regular worship and is protected as an important heritage monument.`,

    audio: `The Modhera Sun Temple is a historic temple dedicated to the Sun God Surya in Gujarat. It was built in the early 11th century during the reign of Bhima the First of the Solanki dynasty. The complex includes the Surya Kund, Sabha Mandap and Gudha Mandap and is famous for its detailed stone carvings and architectural design.`
  },


  /* ---------------- BRIHADISVARA TEMPLE ---------------- */

  brihadeeswarar: {
    id: "brihadeeswarar",
    name: "Brihadisvara Temple",
    location: "Thanjavur, Tamil Nadu",

    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brihadisvara_Temple,_Thanjavur,_Tamil_Nadu,_India_(2017).jpg",

    history: `The Brihadisvara Temple, also known as the Big Temple, is located in Thanjavur, Tamil Nadu.

The temple was built during the reign of Chola king Rajaraja I in the early 11th century. Construction took place approximately between 1003 and 1010 CE.

The temple is dedicated to Lord Shiva and is one of the greatest examples of Chola architecture. Its huge vimana, stone sculptures, inscriptions and carefully designed temple complex demonstrate the advanced architectural and artistic skills of the Chola period.

The main tower rises prominently above the temple and the complex contains several important sculptures, halls and inscriptions.

The Brihadisvara Temple forms part of the UNESCO World Heritage property known as the Great Living Chola Temples, which also includes other important Chola temples in Tamil Nadu.`,

    audio: `The Brihadisvara Temple, also called the Big Temple, is located in Thanjavur, Tamil Nadu. It was built during the reign of Chola king Rajaraja the First in the early 11th century and is dedicated to Lord Shiva. The temple is famous for its massive vimana, stone sculptures, inscriptions and outstanding Chola architecture.`
  }
};


/* =========================================================
   MAIN AR EXPERIENCE
========================================================= */

function ARExperience() {

  const { t } = useTranslation();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [selectedTarget, setSelectedTarget] = useState("hawamahal");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);


  /* =====================================================
     START CAMERA
  ===================================================== */

  const startCamera = async () => {

    try {

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      if (videoRef.current) {

        videoRef.current.srcObject = stream;

        setIsCameraActive(true);
      }

    } catch (err) {

      alert(
        `${t("cameraAccessDenied", {
          defaultValue: "Camera access denied"
        })}: ${err.message}`
      );

    }

  };


  /* =====================================================
     STOP CAMERA
  ===================================================== */

  const stopCamera = () => {

    if (videoRef.current && videoRef.current.srcObject) {

      const stream = videoRef.current.srcObject;

      stream.getTracks().forEach((track) => {
        track.stop();
      });

      videoRef.current.srcObject = null;

    }

    setIsCameraActive(false);
  };


  /* =====================================================
     SCAN PHOTO
  ===================================================== */

  const scanPhoto = () => {

    if (!isCameraActive) return;

    setIsAnalyzing(true);
    setScannedData(null);

    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

    }


    /*
      Demo scan delay.
      After scanning, selected monument information
      is displayed.
    */

    setTimeout(() => {

      setIsAnalyzing(false);

      setScannedData(
        monumentsDB[selectedTarget]
      );

    }, 2000);

  };


  /* =====================================================
     AUDIO STORY
  ===================================================== */

  const toggleAudio = () => {

    if (!scannedData) return;

    if ("speechSynthesis" in window) {

      if (isPlaying) {

        window.speechSynthesis.cancel();

        setIsPlaying(false);

      } else {

        const utterance =
          new SpeechSynthesisUtterance(
            scannedData.audio
          );

        utterance.rate = 0.9;
        utterance.pitch = 1;

        utterance.onend = () => {
          setIsPlaying(false);
        };

        window.speechSynthesis.speak(
          utterance
        );

        setIsPlaying(true);
      }

    } else {

      alert(
        t("speechNotSupported", {
          defaultValue:
            "Speech is not supported in this browser."
        })
      );

    }

  };


  /* =====================================================
     STOP AUDIO WHEN PAGE CLOSES
  ===================================================== */

  useEffect(() => {

    return () => {

      if (
        videoRef.current &&
        videoRef.current.srcObject
      ) {

        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());

      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

    };

  }, []);


  /* =====================================================
     UI
  ===================================================== */

  return (

    <div
      style={{
        backgroundColor: "#111",
        color: "#fff",
        minHeight: "100vh"
      }}
    >

      <BackButton />


      <div
        style={{
          maxWidth: "850px",
          margin: "20px auto",
          padding: "0 20px"
        }}
      >


        {/* PAGE TITLE */}

        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          {t("liveRecognition", {
            defaultValue: "Live Monument Recognition"
          })}
        </h2>


        {/* =================================================
            TARGET MONUMENT SELECTOR
        ================================================= */}

        <div
          style={{
            marginBottom: "20px",
            textAlign: "center"
          }}
        >

          <label
            style={{
              marginRight: "10px",
              color: "#aaa"
            }}
          >
            {t("selectTarget", {
              defaultValue: "Select Monument"
            })}
          </label>


          <select
            value={selectedTarget}
            onChange={(e) => {
              setSelectedTarget(e.target.value);
              setScannedData(null);
              setIsPlaying(false);

              if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
              }
            }}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
              border: "1px solid #555",
              fontSize: "15px",
              cursor: "pointer"
            }}
          >

            <option value="hawamahal">
              Hawa Mahal (Jaipur)
            </option>

            <option value="tajmahal">
              Taj Mahal (Agra)
            </option>

            <option value="chitrakote">
              Chitrakote Falls (Bastar)
            </option>

            <option value="bekalfort">
              Bekal Fort (Kerala)
            </option>

            <option value="modhera">
              Modhera Sun Temple (Gujarat)
            </option>

            <option value="brihadeeswarar">
              Brihadisvara Temple (Thanjavur)
            </option>

          </select>

        </div>


        {/* =================================================
            CAMERA
        ================================================= */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "420px",
            backgroundColor: "#000",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid #333"
          }}
        >

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: isCameraActive
                ? "block"
                : "none"
            }}
          />


          <canvas
            ref={canvasRef}
            style={{ display: "none" }}
          />


          {/* CAMERA OFF */}

          {!isCameraActive && (

            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >

              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "15px"
                }}
              >
                📷
              </div>

              <button
                onClick={startCamera}
                style={{
                  padding: "12px 25px",
                  backgroundColor: "#ff4b2b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                {t("turnCameraOn", {
                  defaultValue: "Turn Camera On"
                })}
              </button>

            </div>

          )}


          {/* SCANNING FRAME */}

          {isCameraActive && (

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                border:
                  "4px dashed rgba(255,255,255,0.4)",
                boxSizing: "border-box"
              }}
            >

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform:
                    "translate(-50%, -50%)",
                  color: "#fff",
                  background:
                    "rgba(0,0,0,0.65)",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}
              >

                {t("pointCamera", {
                  defaultValue:
                    "Point Camera at {{name}} Photo",
                  name:
                    monumentsDB[selectedTarget]
                      .name
                })}

              </div>

            </div>

          )}

        </div>


        {/* =================================================
            CAMERA CONTROLS
        ================================================= */}

        {isCameraActive && (

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "20px",
              flexWrap: "wrap"
            }}
          >

            <button
              onClick={scanPhoto}
              disabled={isAnalyzing}
              style={{
                padding: "13px 30px",
                backgroundColor:
                  isAnalyzing
                    ? "#666"
                    : "#2b6cb0",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                fontWeight: "bold",
                cursor: isAnalyzing
                  ? "not-allowed"
                  : "pointer",
                fontSize: "15px"
              }}
            >

              {isAnalyzing
                ? "🔍 Scanning..."
                : "⚡ Scan Photo Now"}

            </button>


            <button
              onClick={stopCamera}
              style={{
                padding: "13px 22px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "15px"
              }}
            >

              {t("turnCameraOff", {
                defaultValue: "Turn Off Camera"
              })}

            </button>

          </div>

        )}


        {/* =================================================
            SCANNING MESSAGE
        ================================================= */}

        {isAnalyzing && (

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#aaa"
            }}
          >

            <div
              style={{
                fontSize: "28px",
                marginBottom: "8px"
              }}
            >
              🔍
            </div>

            <p>
              Scanning monument photo...
            </p>

          </div>

        )}


        {/* =================================================
            RESULT CARD
        ================================================= */}

        {scannedData && (

          <div
            style={{
              marginTop: "30px",
              background: "#222",
              borderRadius: "18px",
              padding: "22px",
              border: "1px solid #444",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)"
            }}
          >


            {/* LARGE MONUMENT IMAGE */}

            <div
              style={{
                width: "100%",
                height: "330px",
                borderRadius: "15px",
                overflow: "hidden",
                background: "#111",
                marginBottom: "22px"
              }}
            >

              <img
                src={scannedData.image}
                alt={scannedData.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block"
                }}
              />

            </div>


            {/* MONUMENT INFORMATION */}

            <div
              style={{
                padding: "0 8px"
              }}
            >

              <div
                style={{
                  color: "#ff4b2b",
                  fontSize: "14px",
                  fontWeight: "800",
                  letterSpacing: "0.5px",
                  marginBottom: "7px"
                }}
              >

                MATCH FOUND ✅

              </div>


              <h2
                style={{
                  margin: "0 0 8px",
                  fontSize: "28px",
                  color: "#fff"
                }}
              >

                {scannedData.name}

              </h2>


              <p
                style={{
                  fontSize: "16px",
                  color: "#aaa",
                  margin: "0"
                }}
              >

                📍 {scannedData.location}

              </p>


              {/* AUDIO BUTTON */}

              <button
                onClick={toggleAudio}
                style={{
                  marginTop: "18px",
                  padding: "12px 22px",
                  backgroundColor:
                    isPlaying
                      ? "#e53e3e"
                      : "#ff4b2b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px"
                }}
              >

                {isPlaying
                  ? "⏹ Stop Audio"
                  : "🔊 Listen Audio Story"}

              </button>

            </div>


            {/* =================================================
                HISTORY SECTION
            ================================================= */}

            <div
              style={{
                marginTop: "28px",
                background: "#181818",
                padding: "25px",
                borderRadius: "14px",
                borderLeft:
                  "4px solid #ff4b2b"
              }}
            >

              <h3
                style={{
                  color: "#ff4b2b",
                  margin: "0 0 15px",
                  fontSize: "22px"
                }}
              >

                📖 History & Details

              </h3>


              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.85",
                  color: "#e5e5e5",
                  margin: 0,
                  whiteSpace: "pre-line"
                }}
              >

                {scannedData.history}

              </p>

            </div>


            {/* IMAGE SOURCE */}

            <p
              style={{
                marginTop: "15px",
                fontSize: "11px",
                color: "#666",
                textAlign: "right"
              }}
            >
              Image source: Wikimedia Commons
            </p>

          </div>

        )}

      </div>

    </div>

  );
}

export default ARExperience;