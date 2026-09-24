const page = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#f5f1e8] px-6 py-16 text-[#17221b] sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c75b39]">
            <span className="h-2 w-2 rounded-full bg-[#c75b39]" />
            Learn with momentum
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl">
            Build skills that move you forward.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#56635a] sm:text-xl">
            Practical lessons, thoughtful documentation, and a clear path from your first line of code to your next big idea.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/docs" className="rounded-full bg-[#c75b39] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a9462b]">
              Explore the docs
            </a>
            <a href="/about" className="rounded-full border border-[#17221b] px-7 py-3.5 text-sm font-bold transition hover:bg-[#17221b] hover:text-white">
              Our approach <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-8 border-[#e5a94d] sm:-right-8 sm:-top-8" />
          <div className="relative rounded-[2rem] bg-[#17221b] p-8 text-[#f5f1e8] shadow-2xl shadow-[#17221b]/20 sm:p-10">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <span className="text-sm font-semibold tracking-wide">Your learning path</span>
              <span className="rounded-full bg-[#e5a94d] px-3 py-1 text-xs font-bold text-[#17221b]">01 / 04</span>
            </div>
            <div className="py-12">
              <p className="text-sm text-[#b6c0b8]">Currently exploring</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Next.js fundamentals</h2>
              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-2/5 rounded-full bg-[#e5a94d]" />
              </div>
              <p className="mt-3 text-sm text-[#b6c0b8]">4 of 10 lessons completed</p>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/15 pt-6 text-sm">
              <div><strong className="block text-2xl text-[#e5a94d]">12</strong>lessons ready</div>
              <div><strong className="block text-2xl text-[#e5a94d]">∞</strong>ways to build</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page