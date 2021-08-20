{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetatdata = Omit<Video, "url" | "data" | "h">;
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetatdata {
    return {
      id: id,
      title: "title",
    };
  }
}
