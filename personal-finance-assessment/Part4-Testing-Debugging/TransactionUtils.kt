data class Transaction(val id: Int, val amount: Double, val category: String)

object TransactionUtils {
    fun addTransaction(list: MutableList<Transaction>, tx: Transaction): MutableList<Transaction> {
        list.add(tx)
        return list
    }
}
