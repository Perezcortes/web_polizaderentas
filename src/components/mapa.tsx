'use client';

import React, { useEffect } from 'react';
import styles from './Mapa.module.css';

declare module 'react' {
  interface SVGProps<T> extends SVGAttributes<T> {
    'data-estado'?: string;
    title?: string;
  }
}

interface MapaProps {
  offices: {
    estado: string;
  }[];
  onStateClick: (stateId: string) => void;
}

const Mapa: React.FC<MapaProps> = ({ offices, onStateClick }) => {
  useEffect(() => {
    // Resaltar estados con oficinas
    const highlightStates = () => {
      document.querySelectorAll('#mexico-map path').forEach((path) => {
        const estado = path.getAttribute('data-estado');
        if (offices.some(office => 
          office.estado.toLowerCase().replace(/ /g, '-') === estado
        )) {
          path.classList.add(styles['estado-activo']);
        } else {
          path.classList.remove(styles['estado-activo']);
        }
      });
    };

    highlightStates();

    // Agregar event listeners
    const addClickListeners = () => {
      document.querySelectorAll('#mexico-map path').forEach((path) => {
        const handleClick = () => {
          const estadoId = path.getAttribute('data-estado');
          if (estadoId) {
            onStateClick(estadoId);
            const branchesDiv = document.getElementById('branches');
            if (branchesDiv) {
              branchesDiv.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
        
        path.addEventListener('click', handleClick);
        
        // Limpiar event listener al desmontar
        return () => {
          path.removeEventListener('click', handleClick);
        };
      });
    };

    addClickListeners();

    return () => {
      // Limpieza adicional si es necesaria
    };
  }, [offices, onStateClick]);

  return (
    <div className={styles.mapContainer}>
      {/* Versión móvil */}
      <svg
        id="mexico-map"
        viewBox="0 0 800 1100"
        className={`d-block d-sm-none ${styles.mexicoMap}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Todos los estados de México */}
        <path d="M390.53,309.79l-2.34-2.26l-0.07-1.21l1.24-2.87l3.33-4.59l0.93-3.24l1.07-0.73l1.79-0.38l3.47-1.97l1.21-0.92l0.39-1.26l0.73-0.17l0.77,1.39l1.33,1.34l4.44,2.63l0.59,2.44l1.14,2.04l0,0l0.26,0.59l-0.24,1.6l1.96,2.14l-4.28,1.97l-2.55,3.55l-0.72,0.5l-3.02,1.04l-1.26,0.06l-2.17-1.02l-1.74-1.41l-4.21-0.38z" data-estado="aguascalientes" aria-label="Aguascalientes"/>
        <path d="M106.49,137.85l-0.65,0l0,0l-0.76,0.12l0.13,0.44l-0.82,0.41l-0.68,0.01l-0.75,0.86l-0.29-0.74l0.19-0.78l3.08-3.76l0.62-0.15l0.06,0.97l-0.8,0.76l-0.02,0.52l0.69,1.34zm-27.35-11.99l0.56,0.45l0.75,2.86l-0.25,1.02l0.38,2.42l-0.68,0.9l0.04,2.09l-0.62-0.19l-0.54,0.33l-0.65-0.31l-0.6-1.42l-0.58-0.18l-1,0.6l-0.37-0.15l0.07-0.78l2.73-3.03l0.15-0.68l-0.58-1.61l0.51-1.89l0.68-0.43zm58.14-8.56l0.82,0.18l2.68,2.27l-0.54,0.47l-0.6-0.96l-1.69-0.95l-0.67-1.01zm8.46-1.5l0.34,0.64l-0.27,1.02l-1.16,0.04l-0.35-1.56l1.44-0.14zm-142.86-13.07l-0.64,1.32l0.15,1.03l1.31,1.2l0.23,2.9l-0.67,2.08l-0.75,0.23l-0.56-1.47l0.21-0.92l-0.56-0.37l-0.07-1.6l-1.24-1.24l0.35-1l-0.29-0.96l0.74-0.62l0.8,0.04l0.99-0.62zM120.66,92.44l-0.02,0.48l1.1-0.48l0.02,0.32l0.93,0.26l1.27,1.64l0.77,0.39l1.06,2.21l-0.59,0.86l0.12,1.17l1.84,0.83l2.9-0.18l0.34,0.3l-0.17,4.33l0.62,1.71l1.2,0.37l-0.34,1.9l-2.96-2.09l-1.72-2.42l-2.56-1.82l-0.96-1.88l-1.37-0.26l-0.24-1.09l-2.04-2.47l-0.16-0.86l0.77-1.87l-0.21-0.98l0.4-0.37zm-21.55-12.53l0.64,0.81l-0.45,0.14l-0.34-0.36l0.15-0.59zm-9.92-73.05l-0.85,0.51l-0.47-0.4l-1.34,0.01l-0.6,2.05l-0.47,0.48l-0.05,1.34l-1.81,2.43l1.4,1.99l-0.62,1.83l0.29,1.14l-0.42,2.67l0.24,0.98l-0.6,0.98l0.96,0.95l0.92,0.13l3.82,2.76l0,0l-0.47,1.74l0.92,4l-1.12,1.46l-0.74,2.41l-0.08,3.53l-0.85,3.16l0.3,0.65l-0.25,2.22l0.62,2.21l1.37,1.26l-0.52,0.66l-0.02,0.65l2.84,1.84l0.59,3.53l-0.08,5.21l1.72,4.04l0.02,2.21l-0.35,1.3l0.21,0.82l-0.52,1.95l0.37,0.33l-0.65,2.16l1,2.06l0.62,0.38l1.73,4l1.23,0.61l0.3,0.9l0.96,0.15l0.64,0.89l-0.02,1.82l0.45,0.94l0.82,0.32l0.44,0.72l1.17,0.12l0.34-0.86l1.81,0.78l1.21,1.54l0.31-0.06l0.96,1.18l0.94,0.48l0.68,1.13l1.62,0.83l2.09,2.34l1.52,0.83l0.11,0.61l1.44,0.69l1.98,2.47l1.44,1.17l0.3,0.88l-0.73,0.85l0.01,0.48l2.08,2.55l0.79,1.64l-0.58,1.16l0.45,1.64l-0.33,0.25l0.81,1.69l0.82,0.1l0.53-0.7l-0.41-0.38l0.42-0.62l0.48,0.27l0.47-0.36l0.41,0.8l0.6-0.12l-0.04,0.41l0.45,0.12l0.12,2.09l0.39,0.95l1.1-0.03l1.31-1.04l1.08,0.62l1.43,4.51l0.77,0.82l0.59,3.53l2.58,1.46l2.44-0.59l0.48,0.36l0.07,0.73l0.81-0.15l0.11,0.6l-0.36,0.48l0.25,0.66l-0.59,2.6l1.97,2.8l-0.47,2.03l0.62,1.45l-0.39,1.24l0.93,0.57l0.27,0.99l-0.3,2.49l0,0l-0.64-1.71l-0.87-0.26l0,0l-31.69-0.11l0.23-0.53l-0.35-0.49l-0.05-1.32l0.86,1.21l0.79-1.39l-1.61-0.41l-0.35-1.72l1.52-2.99l-0.42-0.96l-0.88,0.53l-0.51-0.49l1.28-2.91l0.65-3.16l-1.27-2.19l-1.56-0.63l-0.07-2.03l-0.44-0.43l-2.2-0.1l0.01-0.81l-0.45-0.52l-1.54-0.86l0.12-0.59l-0.46-1.17l-0.88-0.47l-0.56-1.87l-0.46-0.07l-0.23-0.6l-0.96-0.73l-0.97-0.07l-0.17,0.33l-0.52-1.09l-0.68-0.44l-0.23,0.3l-0.54-2.72l-0.64-1.05l-1.06-0.47l-0.64,0.34l-0.8-0.98l-0.25-1.35l-1.16-0.55l-0.12-0.37l-0.45,0.03l-3.43-4.21l-2.91-1.5l-3.06-0.4l-1.55-2.51l-2.41-1.18l-0.76-0.03l-2-1.92l-1.19,0.25l-2-2.17l-0.89-0.1l-1.88-1.56l0.25-2.52l-0.33-1.5l-1.14-1.62l-1.57-0.58l0.62-3.57l-0.54-1.2l0.02-4.19l-1.46-2.55l-2.06-1.24l0.19-1.4l-0.82-0.77l-0.23,0.4l0.5,0.94l-0.5,0.35l-0.46-0.7l-0.53,0l0.58,1.34l-0.31,0.1l-1.06-2.05l0.57-5.32l-0.63-3.55l-0.53-1.05l-0.6-0.08l-1.44-1.26l-0.53,0.01l-2.3-3.02l-1.55,0.2l-0.25-0.46l0.74-5.28l-1.38-2.71l-2.09-2.2l-1.85-3.14l-1.29-0.96l-0.68,0.08l-0.18-1l-1.27-0.92l-0.27-0.72l-0.41,0.08l-0.12-0.58l1.02-0.52l-0.44-0.9l0.47-1.24l-1.17-1.61l-0.33,0.14l-0.85-1l0.45-0.1l1.6,0.89l1.05-0.96l0.19-2.58l-0.4-0.61l-1.26-0.27l-0.57-0.77l-1.15-0.2l-0.41-1.83l-0.48-0.4l-1.23,0l-1.23-1.18l-0.12-3.02l-0.81-2.83l-0.47-0.75l-2.1-0.71l-0.48-0.56l-2.14-5.9l0.04-1.34l60.19-5.54l-1.58,2.83l-0.67,0.19l0.5,1.79l-0.35,0.24l-0.3,1.52z" data-estado="baja-california" aria-label="Baja California"/>
        {/* Continúa con todos los demás estados... */}
        <path d="M..." data-estado="baja-california-sur" title="Baja California Sur"/>
        <path d="M..." data-estado="campeche" title="Campeche"/>
        <path d="M..." data-estado="chiapas" title="Chiapas"/>
        <path d="M..." data-estado="chihuahua" title="Chihuahua"/>
        <path d="M..." data-estado="coahuila" title="Coahuila"/>
        <path d="M..." data-estado="colima" title="Colima"/>
        <path d="M..." data-estado="durango" title="Durango"/>
        <path d="M..." data-estado="guanajuato" title="Guanajuato"/>
        <path d="M..." data-estado="guerrero" title="Guerrero"/>
        <path d="M..." data-estado="hidalgo" title="Hidalgo"/>
        <path d="M..." data-estado="jalisco" title="Jalisco"/>
        <path d="M..." data-estado="mexico" title="Estado de México"/>
        <path d="M..." data-estado="michoacan" title="Michoacán"/>
        <path d="M..." data-estado="morelos" title="Morelos"/>
        <path d="M..." data-estado="nayarit" title="Nayarit"/>
        <path d="M..." data-estado="nuevo-leon" title="Nuevo León"/>
        <path d="M..." data-estado="oaxaca" title="Oaxaca"/>
        <path d="M..." data-estado="puebla" title="Puebla"/>
        <path d="M..." data-estado="queretaro" title="Querétaro"/>
        <path d="M..." data-estado="quintana-roo" title="Quintana Roo"/>
        <path d="M..." data-estado="san-luis-potosi" title="San Luis Potosí"/>
        <path d="M..." data-estado="sinaloa" title="Sinaloa"/>
        <path d="M..." data-estado="sonora" title="Sonora"/>
        <path d="M..." data-estado="tabasco" title="Tabasco"/>
        <path d="M..." data-estado="tamaulipas" title="Tamaulipas"/>
        <path d="M..." data-estado="tlaxcala" title="Tlaxcala"/>
        <path d="M..." data-estado="veracruz" title="Veracruz"/>
        <path d="M..." data-estado="yucatan" title="Yucatán"/>
        <path d="M..." data-estado="zacatecas" title="Zacatecas"/>
        <path d="M..." data-estado="ciudad-de-mexico" title="Ciudad de México"/>
      </svg>

      {/* Versión desktop */}
      <svg
        id="mexico-map"
        viewBox="0 0 1100 600"
        className={`d-none d-lg-block ${styles.mexicoMap}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mismos paths que la versión móvil pero con viewBox diferente */}
        <path d="M390.53,309.79l-2.34-2.26l-0.07-1.21l1.24-2.87l3.33-4.59l0.93-3.24l1.07-0.73l1.79-0.38l3.47-1.97l1.21-0.92l0.39-1.26l0.73-0.17l0.77,1.39l1.33,1.34l4.44,2.63l0.59,2.44l1.14,2.04l0,0l0.26,0.59l-0.24,1.6l1.96,2.14l-4.28,1.97l-2.55,3.55l-0.72,0.5l-3.02,1.04l-1.26,0.06l-2.17-1.02l-1.74-1.41l-4.21-0.38z" data-estado="aguascalientes" aria-label="Aguascalientes"/>
        <path d="M106.49,137.85l-0.65,0l0,0l-0.76,0.12l0.13,0.44l-0.82,0.41l-0.68,0.01l-0.75,0.86l-0.29-0.74l0.19-0.78l3.08-3.76l0.62-0.15l0.06,0.97l-0.8,0.76l-0.02,0.52l0.69,1.34zm-27.35-11.99l0.56,0.45l0.75,2.86l-0.25,1.02l0.38,2.42l-0.68,0.9l0.04,2.09l-0.62-0.19l-0.54,0.33l-0.65-0.31l-0.6-1.42l-0.58-0.18l-1,0.6l-0.37-0.15l0.07-0.78l2.73-3.03l0.15-0.68l-0.58-1.61l0.51-1.89l0.68-0.43zm58.14-8.56l0.82,0.18l2.68,2.27l-0.54,0.47l-0.6-0.96l-1.69-0.95l-0.67-1.01zm8.46-1.5l0.34,0.64l-0.27,1.02l-1.16,0.04l-0.35-1.56l1.44-0.14zm-142.86-13.07l-0.64,1.32l0.15,1.03l1.31,1.2l0.23,2.9l-0.67,2.08l-0.75,0.23l-0.56-1.47l0.21-0.92l-0.56-0.37l-0.07-1.6l-1.24-1.24l0.35-1l-0.29-0.96l0.74-0.62l0.8,0.04l0.99-0.62zM120.66,92.44l-0.02,0.48l1.1-0.48l0.02,0.32l0.93,0.26l1.27,1.64l0.77,0.39l1.06,2.21l-0.59,0.86l0.12,1.17l1.84,0.83l2.9-0.18l0.34,0.3l-0.17,4.33l0.62,1.71l1.2,0.37l-0.34,1.9l-2.96-2.09l-1.72-2.42l-2.56-1.82l-0.96-1.88l-1.37-0.26l-0.24-1.09l-2.04-2.47l-0.16-0.86l0.77-1.87l-0.21-0.98l0.4-0.37zm-21.55-12.53l0.64,0.81l-0.45,0.14l-0.34-0.36l0.15-0.59zm-9.92-73.05l-0.85,0.51l-0.47-0.4l-1.34,0.01l-0.6,2.05l-0.47,0.48l-0.05,1.34l-1.81,2.43l1.4,1.99l-0.62,1.83l0.29,1.14l-0.42,2.67l0.24,0.98l-0.6,0.98l0.96,0.95l0.92,0.13l3.82,2.76l0,0l-0.47,1.74l0.92,4l-1.12,1.46l-0.74,2.41l-0.08,3.53l-0.85,3.16l0.3,0.65l-0.25,2.22l0.62,2.21l1.37,1.26l-0.52,0.66l-0.02,0.65l2.84,1.84l0.59,3.53l-0.08,5.21l1.72,4.04l0.02,2.21l-0.35,1.3l0.21,0.82l-0.52,1.95l0.37,0.33l-0.65,2.16l1,2.06l0.62,0.38l1.73,4l1.23,0.61l0.3,0.9l0.96,0.15l0.64,0.89l-0.02,1.82l0.45,0.94l0.82,0.32l0.44,0.72l1.17,0.12l0.34-0.86l1.81,0.78l1.21,1.54l0.31-0.06l0.96,1.18l0.94,0.48l0.68,1.13l1.62,0.83l2.09,2.34l1.52,0.83l0.11,0.61l1.44,0.69l1.98,2.47l1.44,1.17l0.3,0.88l-0.73,0.85l0.01,0.48l2.08,2.55l0.79,1.64l-0.58,1.16l0.45,1.64l-0.33,0.25l0.81,1.69l0.82,0.1l0.53-0.7l-0.41-0.38l0.42-0.62l0.48,0.27l0.47-0.36l0.41,0.8l0.6-0.12l-0.04,0.41l0.45,0.12l0.12,2.09l0.39,0.95l1.1-0.03l1.31-1.04l1.08,0.62l1.43,4.51l0.77,0.82l0.59,3.53l2.58,1.46l2.44-0.59l0.48,0.36l0.07,0.73l0.81-0.15l0.11,0.6l-0.36,0.48l0.25,0.66l-0.59,2.6l1.97,2.8l-0.47,2.03l0.62,1.45l-0.39,1.24l0.93,0.57l0.27,0.99l-0.3,2.49l0,0l-0.64-1.71l-0.87-0.26l0,0l-31.69-0.11l0.23-0.53l-0.35-0.49l-0.05-1.32l0.86,1.21l0.79-1.39l-1.61-0.41l-0.35-1.72l1.52-2.99l-0.42-0.96l-0.88,0.53l-0.51-0.49l1.28-2.91l0.65-3.16l-1.27-2.19l-1.56-0.63l-0.07-2.03l-0.44-0.43l-2.2-0.1l0.01-0.81l-0.45-0.52l-1.54-0.86l0.12-0.59l-0.46-1.17l-0.88-0.47l-0.56-1.87l-0.46-0.07l-0.23-0.6l-0.96-0.73l-0.97-0.07l-0.17,0.33l-0.52-1.09l-0.68-0.44l-0.23,0.3l-0.54-2.72l-0.64-1.05l-1.06-0.47l-0.64,0.34l-0.8-0.98l-0.25-1.35l-1.16-0.55l-0.12-0.37l-0.45,0.03l-3.43-4.21l-2.91-1.5l-3.06-0.4l-1.55-2.51l-2.41-1.18l-0.76-0.03l-2-1.92l-1.19,0.25l-2-2.17l-0.89-0.1l-1.88-1.56l0.25-2.52l-0.33-1.5l-1.14-1.62l-1.57-0.58l0.62-3.57l-0.54-1.2l0.02-4.19l-1.46-2.55l-2.06-1.24l0.19-1.4l-0.82-0.77l-0.23,0.4l0.5,0.94l-0.5,0.35l-0.46-0.7l-0.53,0l0.58,1.34l-0.31,0.1l-1.06-2.05l0.57-5.32l-0.63-3.55l-0.53-1.05l-0.6-0.08l-1.44-1.26l-0.53,0.01l-2.3-3.02l-1.55,0.2l-0.25-0.46l0.74-5.28l-1.38-2.71l-2.09-2.2l-1.85-3.14l-1.29-0.96l-0.68,0.08l-0.18-1l-1.27-0.92l-0.27-0.72l-0.41,0.08l-0.12-0.58l1.02-0.52l-0.44-0.9l0.47-1.24l-1.17-1.61l-0.33,0.14l-0.85-1l0.45-0.1l1.6,0.89l1.05-0.96l0.19-2.58l-0.4-0.61l-1.26-0.27l-0.57-0.77l-1.15-0.2l-0.41-1.83l-0.48-0.4l-1.23,0l-1.23-1.18l-0.12-3.02l-0.81-2.83l-0.47-0.75l-2.1-0.71l-0.48-0.56l-2.14-5.9l0.04-1.34l60.19-5.54l-1.58,2.83l-0.67,0.19l0.5,1.79l-0.35,0.24l-0.3,1.52z" data-estado="baja-california" aria-label="Baja California"/>
        {/* Repite para todos los estados kevin como en la versión móvil */}
      </svg>
    </div>
  );
};

export default Mapa;