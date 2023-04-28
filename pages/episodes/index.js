import axios from "@/axios.config";
import axioss from "axios";
import { useRouter } from "next/router";

const Episodes = ({ data, totalPages, currentPage }) => {
  const router = useRouter();

  currentPage = router.query.page ? +router.query.page : 1;

  const handlePagination = async (e) => {
    const page = e.target.textContent;
    const links = document.querySelectorAll(".page-link");
    links.forEach((link) => link.classList.remove("active"));

    if (page === "«" && currentPage > 0) {
      router.push({
        query: `page=${currentPage - 1}`,
      });
    } else if (page === "»" && currentPage < 3) {
      router.push({
        query: `page=${currentPage + 1}`,
      });
    } else if (currentPage >= 3 || currentPage <= 0) {
      return;
    } else {
      router.push({
        query: `page=${page}`,
      });
    }

    e.target.classList.add("active");
  };

  return (
    <>
      <section className="container">
        {data.map((e) => (
          <div className="ep_card" key={e.id}>
            <h2> {e.name}</h2>
            <p>
              Release data: <span>{e.air_date}</span>{" "}
            </p>
            <p>
              Episode: <span>{e.episode}</span>{" "}
            </p>
            <p>
              Characters: <span>{e.characters.length}</span>{" "}
            </p>
          </div>
        ))}
      </section>
      <div className="pagination">
        <a
          href="#"
          className="page-link"
          onClick={(e) => {
            e.preventDefault();
            handlePagination(e);
          }}
        >
          &laquo;
        </a>
        {Array.from({ length: totalPages }, (_, i) => (
          <p
            className={`page-link ${currentPage === i + 1 ? "active" : ""}`}
            onClick={(e) => handlePagination(e)}
            key={i}
          >
            {i + 1}
          </p>
        ))}
        <a
          href="#"
          className="page-link"
          onClick={(e) => {
            e.preventDefault();
            handlePagination(e);
          }}
        >
          &raquo;
        </a>
      </div>
    </>
  );
};

export default Episodes;

export const getServerSideProps = async (context) => {
  const { page } = context.query;

  const allEpisodes = await axios.get(`/episode?page=${+page}`);
  const pagination = allEpisodes.data.results;
  const totalPages = allEpisodes.data.info.pages;

  return {
    props: {
      data: pagination,
      totalPages,
    },
  };
};
