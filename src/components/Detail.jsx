
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Detail = () => {
  const testDetails = {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "https://v2.exercisedb.io/image/P3CfpTPABka1T0",
    id: "0007",
    name: "Alternate Lateral Pulldown",
    target: "lats",
    secondaryMuscles: ["biceps", "rhomboids"],
    instructions: [
      "Sit on the cable machine with your back straight and feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  };

  const { bodyPart, equipment, gifUrl, name, target, instructions } = testDetails;

  const extraDetails = [
    { icon: bodyPartImage, name: bodyPart, label: "Body Part" },
    { icon: targetImage, name: target, label: "Target Muscle" },
    { icon: equipmentImage, name: equipment, label: "Equipment" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{name}</h1>
          <img src={gifUrl} alt={name} className="w-full h-64 object-cover rounded-lg mb-4" />
          
          <div className="flex justify-between mb-6">
            {extraDetails.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <img src={item.icon} alt={item.name} className="h-8 w-8 mb-2" />
                <p className="text-xs font-semibold text-gray-600">{item.label}</p>
                <p className="text-sm text-gray-800 capitalize">{item.name}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Detail;