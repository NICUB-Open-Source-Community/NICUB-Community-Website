const Contribute = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-medium text-[#D9432C]">Make Contribution</h1>
        <p className="text-xl text-gray-600">Join hands to build together</p>
      </div>
      <main className="grid grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <p>STEP 1</p>
          <p>Create a free account</p>
          <p className="max-w-[280px]">
            Get up and running in no time by creating a free account. Register
            only with your email address.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contribute;
