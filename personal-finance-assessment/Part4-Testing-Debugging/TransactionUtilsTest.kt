import org.junit.Assert.*
import org.junit.Test

class TransactionUtilsTest {

    @Test
    fun testAddTransaction() {
        val initial = mutableListOf(
            Transaction(1, 50.0, "Food")
        )
        val newTx = Transaction(2, 30.0, "Transport")

        val updated = TransactionUtils.addTransaction(initial, newTx)

        assertEquals(2, updated.size)
        assertTrue(updated.contains(newTx))
    }
}
