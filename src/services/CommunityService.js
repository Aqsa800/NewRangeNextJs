import useSWR from "swr";
export const useGetSingleCommunityData = (slug) => {
  const {
    data: communityData,
    error,
    mutate,
  } = useSWR(slug ? `/communities/${slug}/detail` : null);
  return { communityData: communityData?.data, communityDataMutate: mutate };
};
export const useGetCommunityOption = () =>{
  const {
    data: communityOption,
    error,
    mutate,
  } = useSWR(`/communnityOptions`);
  return { communityOption: communityOption?.data, communityOptionMutate: mutate };

}
export const useGetAllCommunityData = (slug = null, form = null) => {
  let url = `/communities?`;
  for (let key in form) {
    if (form.hasOwnProperty(key)) {
      if (form[key].value) {
        url += `${key}=${form[key].value}&`;
      }
    }
  }
  const { data: communitiesData, error, mutate, isValidating } = useSWR(url);
  return {
    communitiesData: communitiesData?.data,
    communitiesDataMutate: mutate,
     isValidating,
  };
};
