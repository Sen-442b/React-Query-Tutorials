# React-Query-Tutorials

This document tracks my progress as I learn React-Query



## useQuery hook
 - A hook function that abstracts the whole process of  fetching and storing data in a state variable on mount which comes with many configurations to customise conditions at the time of  fetching  data
   - ### cacheTime
   All the query responses are cached by default by react-query i.e. the responses are temporarily store in the browser to avoid redundant refetching and cacheTime is duration after which the response is supposed be deleted/ garbage collected from the browser. The default duration is `5 minutes`
   
   

