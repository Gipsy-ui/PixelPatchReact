import PropTypes from 'prop-types';

const QuotationCard = ({ quotation }) => {
  if (!quotation) return null;

  const { parts = [], total = {}, laborFee = {} } = quotation;
  
  // Format currency values
  const formatPrice = (value, currency = 'PHP') => {
    if (typeof value === 'object' && value.amount) {
      return `${value.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${value.currency || currency}`;
    }
    if (typeof value === 'number') {
      return `${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
    }
    return value; // Already formatted string
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100 sticky top-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quotation</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Labor Fee:</span>
          <span className="font-medium text-gray-800">{formatPrice(laborFee)}</span>
        </div>
        
        {parts.length > 0 && (
          <div className="border-t border-gray-100 pt-3">
            <span className="text-gray-600">Parts Cost:</span>
            {parts.map((part, index) => (
              <div key={index} className="flex justify-between items-center mt-1">
                <span className="text-gray-500 pl-2">{part.name}</span>
                <span className="font-medium text-gray-800">{formatPrice(part.price, part.currency)}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-base">
            <span className="font-semibold text-gray-900">Total Estimate:</span>
            <span className="font-bold text-blue-600">{formatPrice(total)}</span>
          </div>
        </div>
        
        {quotation.warranty && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <span className="text-gray-600 text-xs">Warranty:</span>
            <p className="text-gray-800 text-sm mt-1">
              {typeof quotation.warranty === 'object' 
                ? `${quotation.warranty.duration} ${quotation.warranty.unit} warranty on parts and labor`
                : quotation.warranty
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

QuotationCard.propTypes = {
  quotation: PropTypes.shape({
    laborFee: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        amount: PropTypes.number,
        currency: PropTypes.string,
      }),
    ]),
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        quantity: PropTypes.number,
        currency: PropTypes.string,
      })
    ),
    total: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        amount: PropTypes.number,
        currency: PropTypes.string,
      }),
    ]),
    warranty: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        duration: PropTypes.number,
        unit: PropTypes.string,
      }),
    ]),
  }),
};

export default QuotationCard;
