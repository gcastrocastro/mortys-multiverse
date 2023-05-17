import {useParams} from 'react-router-dom';

export default function EpisodeDetailPage() {
    const { id } = useParams();

    return (
        <h1>Episode Detail Page, id {id} </h1>
    )
}