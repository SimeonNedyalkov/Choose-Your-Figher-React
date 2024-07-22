export default function getElementEmoji(element) {
    if (!element) return '';
    switch (element.toLowerCase()) {
        case 'water':
            return '💧';
        case 'fire':
            return '🔥';
        case 'earth':
            return '🪨';
        case 'wind':
            return '🌪️';
        default:
            return ''; 
    }
}