import useSWR from 'swr'

export default function getPropertyData(id){
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSWR(`/api/property/${id}`, fetcher)
    return{ data, error, isLoading }
}
