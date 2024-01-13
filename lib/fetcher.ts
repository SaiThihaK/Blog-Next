import appAxios from "@/lib/appAxios";

const fetcher = (url: string) => appAxios.get(url).then((res) => res.data);
export default fetcher;
