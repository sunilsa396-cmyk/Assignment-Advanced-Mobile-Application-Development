fun compoundInterest(principal: Double, rate: Double, periods: Int): Double {
    if (periods == 0) return principal
    return compoundInterest(principal * (1 + rate), rate, periods - 1)
}

fun main() {
    println(compoundInterest(1000.0, 0.05, 3)) // 1157.625
}
