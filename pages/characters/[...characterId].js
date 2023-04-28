import axios from "@/axios.config";
import { useRouter } from "next/router";

const Character = ({ data }) => {
  const router = useRouter();
  const { characterId } = router.query;

  return (
    characterId && (
      <div className="card">
        <img src={data.image} alt={data.name} className="card-image" />
        <div className="card-details">
          <h2 className="card-title">{data.name}</h2>
          <p className="card-text">
            <strong>Status:</strong> {data.status}
          </p>
          <p className="card-text">
            <strong>Species:</strong> {data.species}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {data.gender}
          </p>
          <p className="card-text">
            <strong>Origin:</strong> {data.origin.name}
          </p>
          <p className="card-text">
            <strong>Location:</strong> {data.location.name}
          </p>
          <p className="card-text">
            <strong>Episodes:</strong> {data.episode.length}
          </p>
        </div>
      </div>
    )
  );
};

export default Character;

export const getStaticPaths = async () => {
  // paths;
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await axios.get(`/character/${params.characterId}`);

  const data = response.data;

  return {
    props: {
      data,
    },
  };
};
