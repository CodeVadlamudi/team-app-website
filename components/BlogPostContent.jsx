import React from "react";

function BlogPostContent() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Data exported by Team Cloud organization administrators contained
            private files
          </h1>
          <div className="flex items-center space-x-2">
            <img
              src="./images/user.jpeg"
              alt="User Image"
              className="w-12 h-12 rounded-full"
            />
            <h3 className="text-xl text-indigo-500">Mark Brooklyn</h3>
            <h3 className="text-indigo-400 text-base">June 14, 2023</h3>
          </div>
        </div>

        <div className="lg:h-[600px] block rounded-sm overflow-hidden">
          <img
            src="./images/bp.png"
            alt="Blog Post Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-6">
            <p className="text-lg md:text-xl">
              Administrators of Team Cloud organizations can export public data
              from their organization via the organization settings menu. The
              exports include all the data that appears in public streams, and
              can be used to migrate from Team Cloud to self-hosting Team. Note
              that exporting private data is a separate process that requires
              contacting Team Support.
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              Due to a bug in the public export code, exports of public data
              contained all uploaded files, even those from private messages and
              private streams. This may have allowed organization owners or
              administrators to extract uploaded files that they were not
              otherwise allowed to access. The content of non-public messages
              was never included in public exports.
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              This bug has existed since the public export feature was
              implemented in August 2019. We have deleted all existing Team
              Cloud exports from our servers, and will be making changes to
              auto-expire all exports after 7 days in the future. This bug was
              fixed for self-hosted users in the Team Server 5.4 release.
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              We have notified by email all administrators and users in
              non-deactivated Team Cloud organizations who may have been
              impacted by this bug. As many organizations have never exported
              their data, most Team Cloud users were not affected.
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              We would like to thank Antoine Benoist for bringing this issue to
              our attention.
            </p>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-8">
            <img
              src="./images/user.jpeg"
              alt="User Image"
              className="w-14 h-14 rounded-full"
            />
            <div className="space-y-1">
              <h4 className="uppercase text-pink-500 font-medium">
                Written by
              </h4>
              <h3 className="text-2xl font-medium text-zinc-700">
                Mark Brooklyn
              </h3>
              <p className="text-base text-stone-500">
                COO at Team. Author of the upcoming book on Team Management and
                Leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPostContent;
