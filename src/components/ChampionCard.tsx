import type { Champion } from '../types/Champion';

interface ChampionCardProps {
    campeon: Champion;
}

export const ChampionCard = ({ campeon }: ChampionCardProps) => {

    const rutaImagen = campeon.imagen || '/champions/${campeon.id}.jpg';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            backgroundColor: '#071A30', // Color fondo
            color: '#ffffff' // Color texto
        }}>
            <img
                src = {rutaImagen}
                alt = {campeon.nombre}
                loading =  "lazy"
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '6px',
                    objectFit: 'cover'
                }}
            />
            <span style={{
                marginTop: '6px',
                fontSize: '16px',
                textAlign: 'center',
                color: '#ffffff'
            }}>
                {campeon.nombre}
            </span>
        </div>
    );
};