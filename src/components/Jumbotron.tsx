function Jumbotron() {
  return (
    <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('/assets/bg2.png')] min-h-screen bg-center bg-cover bg-no-repeat relative">
      <div className="absolute bottom-0 h-2/12" />
      <h1 className="text-3xl font-bold underline">hello world</h1>
    </div>
  );
}

export default Jumbotron;
