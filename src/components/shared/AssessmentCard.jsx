import PropTypes from 'prop-types';

const AssessmentCard = ({ assessment, images = [] }) => {
  if (!assessment) return null;

  const { deviceCondition, observedIssues, recommendation } = assessment;

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {deviceCondition && (
          <div>
            <span className="text-gray-500">Device Condition</span>
            <p className="font-medium text-gray-800">{deviceCondition}</p>
          </div>
        )}
        
        {observedIssues && (
          <div>
            <span className="text-gray-500">Observed Issues</span>
            <p className="font-medium text-gray-800">{observedIssues}</p>
          </div>
        )}
        
        {recommendation && (
          <div className="md:col-span-2">
            <span className="text-gray-500">Recommendation</span>
            <p className="font-medium text-gray-800">{recommendation}</p>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Assessment Images</h3>
          <div className="flex flex-wrap gap-4">
            {images.map((image, index) => (
              <img 
                key={index}
                src={image.url} 
                alt={image.alt} 
                className="w-24 h-24 rounded-lg object-contain border border-gray-200" 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

AssessmentCard.propTypes = {
  assessment: PropTypes.shape({
    deviceCondition: PropTypes.string,
    observedIssues: PropTypes.string,
    recommendation: PropTypes.string,
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};

export default AssessmentCard;
