export class SpecialOfferComponent {

	//...

	render(view) {
		//... code to render the view in HTML
	}

	createView(account) {
		const view = {};

		if (account) {
			view.accountType = account.type;
			const offerDetails = account.offerDetails;

			if (offerDetails) {
				const errorCode = offerDetails.error && offerDetails.error.code;
				view.title = null;
				view.errorText = null;
				const offerDetailsExist = offerDetails && !errorCode;
				if (offerDetailsExist) {
					view.offerAccepted = offerDetails.offerAccepted;
					view.title = view.offerAccepted ? TITLE_OFFER_ACCEPTED : TITLE_OFFER;
					view.amountSaved = offerDetails.potentialSavings;
					view.offerExpiry = offerDetails.expiryDate;
				} else {
					if (this.isBillingExceptionError(errorCode)) {
						view.errorText = TEXT_BILLING_EXCEPTION;
					} else if (this.isRecoverableError(errorCode)) {
						view.errorText = TEXT_RECOVERABLE_ERROR;
					} else if (this.isFatalError(errorCode)) {
						view.errorText = TEXT_FATAL_ERROR;
					}
				}
			}
		}

		return view;
	}

	isFatalError(errorCode) {
		return (
			this.errorCode === ErrorCode.FATAL_ERROR_CODE ||
			(!!errorCode && !this.isRecoverableError(errorCode) && !this.isBillingExceptionError(errorCode))
		);
	}

	isRecoverableError() {
		return this.errorCode === ErrorCode.RECOVERABLE_ERROR_CODE;
	}

	isBillingExceptionError() {
		return this.errorCode === ErrorCode.BILLING_EXCEPTION_CODE;
	}
}