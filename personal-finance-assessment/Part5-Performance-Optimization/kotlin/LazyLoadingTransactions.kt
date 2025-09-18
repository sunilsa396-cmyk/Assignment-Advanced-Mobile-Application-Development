data class Transaction(val id: Int, val amount: Double, val category: String)

fun fetchTransactions(offset: Int, limit: Int): List<Transaction> {
    // Simulating API pagination
    return (offset until offset + limit).map { 
        Transaction(it, (10..100).random().toDouble(), "Category $it")
    }
}

// Example usage
fun main() {
    var offset = 0
    val pageSize = 10
    val firstBatch = fetchTransactions(offset, pageSize)
    println("Loaded: ${firstBatch.size} transactions")

    offset += pageSize
    val secondBatch = fetchTransactions(offset, pageSize)
    println("Loaded: ${secondBatch.size} transactions")
}
