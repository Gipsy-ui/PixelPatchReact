import PropTypes from 'prop-types';

const TransactionCard = ({ transaction, client, pickupAddress }) => {
  if (!transaction && !client) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {transaction?.paidBy && (
          <div>
            <span className="text-gray-500">Paid by:</span>
            <p className="font-medium text-gray-800">{transaction.paidBy}</p>
          </div>
        )}
        
        {client?.name && (
          <div>
            <span className="text-gray-500">Client:</span>
            <p className="font-medium text-gray-800">{client.name}</p>
          </div>
        )}
        
        {transaction?.invoiceUrl && (
          <div>
            <span className="text-gray-500">Invoice:</span>
            <a href={transaction.invoiceUrl} className="font-medium text-blue-600 hover:underline">
              View &gt;
            </a>
          </div>
        )}
        
        {pickupAddress && (
          <div>
            <span className="text-gray-500">Address:</span>
            <p className="font-medium text-gray-800">{pickupAddress}</p>
          </div>
        )}
        
        {transaction?.requestTime && (
          <div>
            <span className="text-gray-500">Request Time:</span>
            <p className="font-medium text-gray-800">{transaction.requestTime}</p>
          </div>
        )}
        
        {client?.phone && (
          <div>
            <span className="text-gray-500">Contact:</span>
            <p className="font-medium text-gray-800">{client.phone}</p>
          </div>
        )}
        
        {transaction?.paymentTime && (
          <div>
            <span className="text-gray-500">Payment Time:</span>
            <p className="font-medium text-gray-800">{transaction.paymentTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

TransactionCard.propTypes = {
  transaction: PropTypes.shape({
    paidBy: PropTypes.string,
    invoiceUrl: PropTypes.string,
    requestTime: PropTypes.string,
    paymentTime: PropTypes.string,
  }),
  client: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
  pickupAddress: PropTypes.string,
};

export default TransactionCard;
