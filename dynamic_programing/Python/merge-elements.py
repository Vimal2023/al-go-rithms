def merge_elements(arr):
    n = len(arr)
    # Create a table to store the minimum cost of merging elements
    dp = [[0 for _ in range(n)] for _ in range(n)]

    # Initialize the table for merging a single element
    for i in range(n):
        dp[i][i] = arr[i]

    # Fill the table using dynamic programming
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')  # Set initial value to infinity
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j]  # Merge elements i to k and k+1 to j
                dp[i][j] = min(dp[i][j], cost)

    # The minimum cost of merging all elements into a single element is stored in dp[0][n-1]
    return dp[0][n - 1]

# Example usage
arr = [1, 3, 5, 2, 4]
min_cost = merge_elements(arr)
print("Minimum cost of merging elements:", min_cost)
