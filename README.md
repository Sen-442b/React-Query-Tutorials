# React-Query-Tutorials

This document tracks my progress as I learn React-Query



## useQuery hook
 - A hook function that abstracts the whole process of  fetching and storing data in a state variable on mount which comes with many configurations to customise the data fetching
   - ### cacheTime
   All the query responses are cached by default by react-query i.e. the responses are temporarily store in the browser to avoid redundant refetching and cacheTime is the duration after which the response is supposed be deleted/ garbage collected from the browser. The default duration is 5 minutes (`cacheTime:300000`)
   - ### staleTime
   useQuery refetches data on many events and hence considers fetched data `stale` by default which in this context means that the data is old and should be updated on certain user interactions, staleTime is the duration after which the fetched data becomes stale, it is 0 by default (`staleTime:0`)
   - ### refetching events 
   react query can refetch  query after a few events are triggered like `refetchOnWindowFocus:true|false|"always"`, `refetchOnMount:true|false|always`
   

