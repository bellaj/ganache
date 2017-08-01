import React, { Component } from 'react'
import TxList from './TxList'
import WithEmptyState from 'Elements/WithEmptyState'
import EmptyTransactions from './EmptyTransactions'

import TestRpcProvider from 'Data/Providers/TestRPCProvider'

class RecentTxs extends Component {
  render () {
    return (
      <WithEmptyState
        test={this.props.testRpcState.transactions.length === 0}
        emptyStateComponent={EmptyTransactions}
      >
        <main>
          <TxList transactions={this.props.testRpcState.transactions} />
        </main>
      </WithEmptyState>
    )
  }
}

export default TestRpcProvider(RecentTxs)
