"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  apiKey: string;
  lat: number;
  lng: number;
  zoom?: number;
}

export default function GoogleMap({
  apiKey,
  lat,
  lng,
  zoom = 14,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom,
        });

        // Dodanie markera
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title: "Lokalizacja",
        });
      }
    }
  }, [apiKey, lat, lng, zoom]);

  return <div ref={mapRef} className="h-75 w-full rounded-xl xl:h-100" />;
}
