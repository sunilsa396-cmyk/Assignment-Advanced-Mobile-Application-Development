data class Transaction(val amount: Int, val category: String, val date: String)

fun sortTransactions(transactions: List<Transaction>): List<Transaction> {
    return transactions.sortedByDescending { it.date }
}

fun main() {
    val data = listOf(
        Transaction(50, "Food", "2023-09-10"),
        Transaction(30, "Transport", "2023-09-12"),
        Transaction(20, "Food", "2023-09-11")
    )
    println(sortTransactions(data)) // Sorted by latest date first
}
