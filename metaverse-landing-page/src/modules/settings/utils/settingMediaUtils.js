import { EyeIcon } from "@heroicons/react/solid";

export const initParams = {
  page: 1,
  limit: 10,
  type_id: null,
  metaverse_id: null,
};

export const settingMediaColumns = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      classNameHeader: "w-32",
    },
    {
      title: "Description",
      dataIndex: "description",
      classNameHeader: "w-60",
    },
    {
      title: "Cover image",
      dataIndex: "cover_link",
      classNameHeader: "w-60",
      render: (cover_link) => <img src={cover_link} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      classNameHeader: "w-32",
      className: "text-center",
      render: (price) => (price ? price.toLocaleString() : price),
    },
    {
      title: "",
      dataIndex: "media_link",
      className: "text-center",
      render: (media_link) => (
        <a className="wrap-icon-action" href={media_link} target="_blank">
          <EyeIcon className="w-4 h-4" />
        </a>
      ),
    },
  ];
};

export const MEDIA_TYPES = [
  {
    type_id: 4,
    name: "ebook",
    accept: ".pdf",
  },
  {
    type_id: 2,
    name: "audio",
    accept: "audio/*",
  },
  {
    type_id: 3,
    name: "video",
    accept: ".mp4, .mov",
  },
];
