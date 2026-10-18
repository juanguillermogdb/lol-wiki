import type { Champion } from '../types/Champion';

interface ChampionCardProps {
    campeon: Champion;
}

export const ChampionCard = ({ campeon }: ChampionCardProps) => {
    return (
        <div style={{
            backgroundColor: '#071A30', // Color fondo
            color: '#ffffff' // Color texto
        }}>
            {campeon.nombre}
        </div>
    );
};