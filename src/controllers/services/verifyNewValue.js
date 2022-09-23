function verifyNewValue(debit, credit, estorn, balance) {
    return debit + credit + estorn + balance
}

module.exports = { verifyNewValue }