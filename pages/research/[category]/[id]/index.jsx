import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InnerLayout from "../../../../components/_shared/InnerLayout";
import { allResearch } from "../../../../lib/research";

const App = () => {
  const router = useRouter();
  const [category, setCategory] = useState(null);
  const [id, setId] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (router.query.category && router.query.id) {
      setCategory(router.query.category);
      setId(router.query.id.toLowerCase());
    }
  }, [router.query]);

  useEffect(() => {
    if (id && category) {
      setItem(allResearch[category][Number(id) - 1]);
    }
  }, [category, id]);

  return (
    <InnerLayout>
      <div className="h-full flex flex-col">
        <div className="flex gap-6 items-start">
          <div className="w-1/2 2xl:w-3/5 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
            <img src={item?.img} className="w-full rounded-xl" />
          </div>
          <div className="w-1/2 2xl:w-2/5 h-full flex flex-col items-center justify-between text-center">
            <div>
              <Link href={`/research/${category}`}>
                <div className="flex items-center justify-center text-4xl font-bold font-audiowide text-brand-lightBlue uppercase cursor-pointer hover:opacity-80 relative">
                  <div className="absolute left-0">{"<"}</div>
                  <div>{item?.name}</div>
                </div>
              </Link>
              <div className="text-xl mt-8">{item?.desc}</div>
            </div>
            <div className="w-full flex flex-col items-center">
              {item?.stats && (
                <div className="self-center flex items-center gap-6">
                  {item.stats.map((s, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                          <img src={s.img} className="w-8" />
                        </div>
                      </div>
                      <div className="font-audiowide">{s.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {item?.boosts && (
                <div className="w-4/5 flex items-center justify-between gap-3 mt-6">
                  {item.boosts.map((b, i) => {
                    if (b.value !== 0)
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                            <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                              <img src={b.img} />
                            </div>
                          </div>
                          <div>+ {b.value}</div>
                        </div>
                      );
                  })}
                </div>
              )}

              <div className="w-4/5 flex items-center justify-between gap-3 mt-6">
                {item?.prices &&
                  item.prices.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                        <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                          <img src={p.img} />
                        </div>
                      </div>
                      <div>{p.value}</div>
                    </div>
                  ))}
                {item?.time && (
                  <div className="flex items-center gap-2">
                    <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                      <div className="w-full rounded-full bg-gray-200 flex items-center justify-center">
                        <img src="/brand/time.png" />
                      </div>
                    </div>
                    <div>
                      {moment.utc(item.time * 1000).format("H[h] mm[m]")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default App;
