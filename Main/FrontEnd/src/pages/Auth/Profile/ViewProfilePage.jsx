import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LoadingComponent from "../../../components/Loading/Loading";
import { GetUserById } from "../../../services/userService";

export default function ViewProfilePage() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const loadUser = async () => {
      const res = await GetUserById(id);
      setData(res);
      setIsLoading(false);
    };
    loadUser();
  }, [id]);

  if (!data) {
    return <div>This user does not exist</div>;
  }
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          {/* Content area */}
          <div className="lg:pl-64">
            <div className="lg:px-8">
              <div className="mx-auto flex flex-col lg:max-w-4xl">
                <main className="flex-1">
                  <div className="relative mx-auto max-w-4xl">
                    <div className="pb-16 pt-10">
                      <div className="px-4 sm:px-6 lg:px-0">
                        <div className="py-6">
                          {/* Description list with inline editing */}
                          <div className="mt-10 divide-y divide-gray-200">
                            <div className="space-y-1">
                              <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Profile
                              </h3>
                              <p className="max-w-2xl text-sm text-gray-500">
                                This information will be displayed publicly so
                                be careful what you share.
                              </p>
                            </div>
                            <div className="mt-6">
                              <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500">
                                    User Name
                                  </dt>
                                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">
                                      {data.username}
                                    </span>
                                    <span className="ml-4 flex-shrink-0">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                      >
                                        Update
                                      </button>
                                    </span>
                                  </dd>
                                </div>
                                {/* <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Photo
                                  </dt>
                                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">
                                      <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                      />
                                    </span>
                                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                      >
                                        Update
                                      </button>
                                      <span
                                        aria-hidden="true"
                                        className="text-gray-300"
                                      >
                                        |
                                      </span>
                                      <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                      >
                                        Remove
                                      </button>
                                    </span>
                                  </dd>
                                </div> */}
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Email
                                  </dt>
                                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">
                                      {data.email}
                                    </span>
                                  </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Address
                                  </dt>
                                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">
                                      {data.address}
                                    </span>
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>

                          {/* <div className="mt-10 divide-y divide-gray-200">
                            <div className="space-y-1">
                              <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Account
                              </h3>
                              <p className="max-w-2xl text-sm text-gray-500">
                                Manage how information is displayed on your
                                account.
                              </p>
                            </div>
                            <div className="mt-6">
                              <dl className="divide-y divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Language
                                  </dt>
                                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">English</span>
                                    <span className="ml-4 flex-shrink-0">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                      >
                                        Update
                                      </button>
                                    </span>
                                  </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Date format
                                  </dt>
                                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">
                                      DD-MM-YYYY
                                    </span>
                                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                      >
                                        Update
                                      </button>
                                      <span
                                        aria-hidden="true"
                                        className="text-gray-300"
                                      >
                                        |
                                      </span>
                                      <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                      >
                                        Remove
                                      </button>
                                    </span>
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
