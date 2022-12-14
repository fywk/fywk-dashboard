import Widget from "../Widget";
import AlbumGrid from "./music/AlbumGrid";
import ArtistsGrid from "./music/ArtistsGrid";
import NowPlaying from "./music/NowPlaying";
import Statistics from "./music/Statistics";

const Music = () => {
  const SUBTITLE_STYLE = "mb-2 text-gray-600";

  return (
    <Widget title="Music" accentColor="secondary">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr] md:gap-x-9">
        <div className="grid grid-rows-[auto_1fr] md:order-2" id="recent-track">
          <h3 className={SUBTITLE_STYLE}>Recent Track</h3>
          <NowPlaying />
        </div>
        <div
          className="grid grid-rows-[auto_1fr] md:order-1"
          id="music-stats-past-week"
        >
          <h3 className={SUBTITLE_STYLE}>
            Statistics <small className="pl-0.5">Last 7 days</small>
          </h3>
          <Statistics />
        </div>
        <div className="md:order-3 md:col-span-full">
          <h3 className={SUBTITLE_STYLE}>
            Top Artists <small className="pl-0.5">Last 30 days</small>
          </h3>
          <ArtistsGrid />
        </div>
        <div className="w-full md:order-5 md:col-span-full">
          <h3 className={SUBTITLE_STYLE}>
            Top Albums <small className="pl-0.5">Last 90 days</small>
          </h3>
          <AlbumGrid />
        </div>
      </div>
    </Widget>
  );
};

export default Music;
