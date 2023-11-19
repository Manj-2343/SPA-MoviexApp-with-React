import { useParams } from "react-router-dom";
import "./style.scss";
import DetailsBanner from "./detailsBanner/detailsBanner";
import useFetch from "../../hooks/useFetch";
import Cast from "../cast/cast";
import VideosSection from "../videoSection/VideoSection";
import Similar from "../carousels/Similar";
import Recommendation from "../carousels/Recomendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );

  return (
      <div>
        <pre>{console.log(mediaType)}</pre>
        <pre>{console.log(id)}</pre>
          <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
          <Cast data={credits?.cast} loading={creditsLoading} />
          <VideosSection data={data} loading={loading} />
          <Similar mediaType={mediaType} id={id} />
          <Recommendation mediaType={mediaType} id={id} />
      </div>
  );
};

export default Details;