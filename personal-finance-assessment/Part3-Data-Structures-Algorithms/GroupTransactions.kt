fun groupTransactions(transactions: List<Map<String, Any>>): Map<String, Int> {
    val result = mutableMapOf<String, Int>()
    for (tx in transactions) {
        val category = tx["category"] as String
        val amount = tx["amount"] as Int
        result[category] = (result[category] ?: 0) + amount
    }
    return result
}

fun main() {
    val data = listOf(
        mapOf("amount" to 50, "category" to "Food"),
        mapOf("amount" to 30, "category" to "Transport"),
        mapOf("amount" to 20, "category" to "Food")
    )
    println(groupTransactions(data)) // {Food=70, Transport=30}
}
