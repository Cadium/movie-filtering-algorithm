# movie-filtering-algorithm
The algorithm. Its complexity using "Big O" notation with some explanation on how I calculated it: 

First, the algorithm filters movies based on genres by iterating over each movie in the database and checking if it matches any of the requested genres. This part of the code has a time complexity of O(n), where n is the number of movies. Inside the filter function, there is another loop that counts the number of matching genres for each movie. This loop also has a time complexity of O(n) in the worst case, so the overall time complexity of this filtering process is O(n^2).

Next, the filtered movies are sorted based on the number of matching genres. The sort function used in this process has a time complexity of O(n * log n) in the worst case, where n is the number of movies being sorted. Since we are only sorting the filtered movies, the maximum number of movies in this case is n, so the time complexity is O(n * log n).

After sorting, the algorithm removes any duplicates from the list of movies and filters out any undefined values. The code first creates a new array by copying the elements from the input array, which has a time complexity of O(n). Then it uses the map function to iterate over each element of the copied array, giving a time complexity of O(n) as well. Inside the map function, there is a loop that uses the find function, which also has a time complexity of O(n) in the worst case. Finally, the filter function is called, which has a time complexity of O(n) in the worst case. Therefore, the overall time complexity of this part of the code is O(n^2).

Lastly, the algorithm returns either the filtered and de-duplicated list of movies or a single random movie from the original list if the filtered list is empty. The return statement has a constant time complexity of O(1).

Overall, the algorithm's time complexity is dominated by the filtering and de-duplication process, which has a time complexity of O(n^2), meaning that as the number of movies increases, the processing time grows exponentially. This is important to keep in mind when dealing with larger data sets.
