import { useRef, useEffect, useState } from 'react'

export default function TimeLine({ index, company, position, date, description }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`time-line font-barlow d-flex align-start animate-timeline ${visible ? 'visible' : ''}`}
    >
      <div className="time-line font-barlow d-flex align-start">
        <div className="text-right w-50 bp-desktop">
          <h2>{company}</h2>
          <p>{date}</p>
        </div>
        <div className="timeline-container">
          {" "}
          <div
            className={`timeline-circle ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <svg width="36" height="36">
              <circle cx="18" cy="18" r="14" />
            </svg>
          </div>
          {index !== -1 && (
            <>
              <div className="timeline-dashed-line"></div>
            </>
          )}
        </div>
        <div className="timeline-description">
          <div className="text-left bp-mobile">
            <h2>{company}</h2>
            <p>{date}</p>
          </div>
          <div className="text-left w-100 pb-2r">
            <h3>{position}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
