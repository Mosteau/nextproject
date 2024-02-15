import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }



  return (
    <div className="flex flex-col items-center justify-center  text-black">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nom :</label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            value={formData.nom}
            name="nom"
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Prénom :</label>
          <input
            type="text"
            placeholder="Entrez votre prenom"
            value={formData.prenom}
            name="prenom"
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Message :</label>
          <textarea
              type="text"
              placeholder="Entrez votre message"
              value={formData.message}
              name="message"
              onChange={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
