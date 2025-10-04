import { FileChartColumnIncreasing, MapPin, Users } from "lucide-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ListedBooks = () => {
  return (
    <section>
      <div className="bg-[#F3F3F3] text-center py-10 rounded-xl">
        <h2 className="text-4xl font-semibold">Books</h2>
      </div>
      <div className="py-10">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>WishList Books</Tab>
          </TabList>

          <TabPanel>
            <section className="my-8">
              <div className="flex flex-col lg:flex-row justify-start border border-[#13131326] rounded-3xl p-6 shadow-md gap-10">
                <figure className="bg-[#F3F3F3] p-10 w-[250px] h-fit rounded-2xl  flex items-center justify-center">
                  <img
                    src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
                    className="max-w-[120px] h-fit rounded-lg shadow-2xl"
                  />
                </figure>
                <div className="p-4 ">
                  <h1 className="text-3xl playfair-font font-semibold">
                    The Catcher in the Rye
                  </h1>
                  <p className="font-medium pt-5">By : Awlad Hossain</p>
                  <div className="flex items-center py-4 gap-4">
                    <div className="space-x-3.5 text-lg">
                      <span className="font-bold">Tag</span>
                      {/* {tags.map((tag, index) => ( */}
                      <span className="badge bg-[#23be0a0d] font-medium text-[#23BE0A] text-lg p-5 rounded-full">
                        #Young Adult
                      </span>
                      <span className="badge bg-[#23be0a0d] font-medium text-[#23BE0A] text-lg p-5 rounded-full">
                        #Identity
                      </span>

                      {/* ))} */}
                    </div>
                    <span className="text-[#131313b3] text-lg flex items-center gap-1">
                      <MapPin />
                      Year of Publishing: 1924
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-[#131313b3] text-lg flex items-center gap-1">
                      <Users />
                      Publisher: Scribner
                    </span>
                    <span className="text-[#131313b3] text-lg flex items-center gap-1">
                      <FileChartColumnIncreasing />
                      Page 192
                    </span>
                  </div>

                  <div className="divider"></div>

                  <div className="space-x-6">
                    <button className="btn p-6 text-[#328EFF] rounded-full bg-[#328eff26] border-none font-normal text-lg">
                      Catergory: <span>Classic</span>
                    </button>
                    <button className="btn font-normal p-6 rounded-full text-lg bg-[#FFAC3326] border-none text-[#FFAC33]">
                      Ratings: <span>4.5</span>
                    </button>
                    <button className="font-normal btn p-6 rounded-full text-lg bg-[#23BE0A] border-none text-white ">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <h2>WishList Books</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooks;
