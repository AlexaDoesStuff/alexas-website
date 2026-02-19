type StylizedMediaPlayerProps = {
  video: string;
};

export const StylizedMediaPlayer: React.FC<StylizedMediaPlayerProps> = ({
  video,
}) => {
  return (
    <video
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="portfolio-video"
    />
  );
};
