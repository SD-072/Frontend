import type { LatLngTuple } from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import type { ApiEvent } from '@/types';

const MapBounds = ({ events }: { events: ApiEvent[] }) => {
  const map = useMap();

  useEffect(() => {
    const bounds: LatLngTuple[] = events.map((event) => [event.latitude, event.longitude]);
    if (bounds.length) map.fitBounds(bounds);
  }, [map, events]);

  return null;
};

export default MapBounds;
