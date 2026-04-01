// 04 — Union and Intersection Types — Hard
// Goal: model complex domain states that are impossible to get wrong

// ─────────────────────────────────────────────
// Challenge: Type a payment processing state machine
//
// Payments have strict rules about which transitions are valid.
// Use TypeScript to make invalid state transitions impossible.
//
// Payment lifecycle:
//   created → processing → succeeded | failed | refunded
//   processing → cancelled (before completion only)
//   succeeded → refunded (after completion)
//   failed → (terminal)
//   cancelled → (terminal)
//   refunded → (terminal)
//
// Each state carries different data:
//   created:    { id, amount, currency, customerId, createdAt }
//   processing: created fields + { processorId, startedAt }
//   succeeded:  processing fields + { completedAt, receiptUrl }
//   failed:     processing fields + { failedAt, failureCode, failureMessage }
//   cancelled:  created fields + { cancelledAt, reason }
//   refunded:   succeeded fields + { refundedAt, refundAmount, refundId }
//
// Requirements:
//
// 1. Model each state as a type with a 'status' discriminant.
//    Use intersection types to avoid repeating fields.
//
// 2. Model valid transitions as a type:
//    type ValidTransitions = {
//      created: 'processing' | 'cancelled'
//      processing: 'succeeded' | 'failed' | 'cancelled'
//      succeeded: 'refunded'
//      failed: never
//      cancelled: never
//      refunded: never
//    }
//
// 3. Write typed transition functions — each only accepts the right input state:
//    startProcessing(payment: CreatedPayment, processorId: string): ProcessingPayment
//    completePayment(payment: ProcessingPayment, receiptUrl: string): SucceededPayment
//    failPayment(payment: ProcessingPayment, code: string, message: string): FailedPayment
//    cancelPayment(payment: CreatedPayment | ProcessingPayment, reason: string): CancelledPayment
//    refundPayment(payment: SucceededPayment, amount: number, refundId: string): RefundedPayment
//
//    These should be COMPILE ERRORS:
//    refundPayment(failedPayment, ...)   ← can't refund a failed payment
//    completePayment(createdPayment, ...)  ← can't complete without processing
//
// 4. Write a displayPayment(payment: Payment): string
//    that shows a summary appropriate to each state.
//    Must be exhaustive — TypeScript should warn if you miss a state.
//
// When you're done, ask yourself:
// - What is "making illegal states unrepresentable"? Is that what you just did?
// - How is this different from checking states with if/else at runtime?
// - In a real payment system, what else would you add to this model?

// your code here
