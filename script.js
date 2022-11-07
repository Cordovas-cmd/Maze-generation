// Try to create a maze generation / traversal project using Depth-First search algo.

/* Depth first search
    1. Given current node as a parameter
    2. Mark current node as visited
    3. For every edge from the current node -> new node N
        a. If the new node N has not been visited
        b. Invoke this routine recursively for the new node N
*/

/* Recursive routine for depth-first search 
    1. Given a current cell as a parameter
    2. Mark the current cell as visited
    3. WHile the current cell has any unvisited neighbour cells
        a. CHose one of the unvisited neighbours
        b. Remove the wall between the current cell and the chosen cell
        c. Invoke the routine recursively for a chosen cell.
        which is invoked once for any initial cell in the area.*/