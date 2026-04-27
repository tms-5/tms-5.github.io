import { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function TimeLine({
  index,
  isLast = false,
  company,
  position,
  date,
  description,
  meta,
  location,
  topics,
  skills,
  linkedinNote,
  skillsPreviewCount = 2,
}) {
  const { t } = useTranslation()
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [skillsExpanded, setSkillsExpanded] = useState(false)

  const topicList =
    Array.isArray(topics) && topics.length > 0 ? topics : null
  const skillList = Array.isArray(skills) ? skills.filter(Boolean) : []
  const preview = Math.max(0, Math.min(skillsPreviewCount, skillList.length))
  const hiddenSkillCount = skillList.length - preview
  const visibleSkills = skillsExpanded ? skillList : skillList.slice(0, preview)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`time-line-group font-barlow d-flex align-start animate-timeline ${visible ? 'visible' : ''} ${isLast ? 'time-line-group--last' : ''}`}>
      <div className='time-line font-barlow align-start'>
        <div className='text-right bp-desktop'>
          <h2>{position}</h2>
          <p>{date}</p>
        </div>
        <div className='timeline-container'>
          {' '}
          <div
            className={`timeline-circle ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <svg width='36' height='36'>
              <circle cx='18' cy='18' r='14' />
            </svg>
          </div>
          <div className='timeline-dashed-line'></div>
        </div>
        <div className='timeline-description'>
          <div className='text-left bp-mobile'>
            <h2>{position}</h2>
            <p>{date}</p>
          </div>
          <div className='text-left w-100 pb-2r'>
            {(meta || location) ? (
              <p className='timeline-meta fw-700'>
                <span className='timeline-meta-text'>{meta}</span>
                {meta && location ? ' · ' : ''}
                <span className='timeline-location'>{location}</span>
              </p>
            ) : null}
            {topicList ? (
              <ul className='timeline-topics'>
                {topicList.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : description ? (
              <p>{description}</p>
            ) : null}
            {skillList.length > 0 ? (
              <div className='timeline-skills'>
                {visibleSkills.map((skill, i) => (
                  <span key={`${skill}-${i}`} className='skill-tag'>
                    {skill}
                  </span>
                ))}
                {!skillsExpanded && hiddenSkillCount > 0 ? (
                  <button
                    type='button'
                    className='skill-tag skill-tag-more'
                    onClick={() => setSkillsExpanded(true)}
                    aria-expanded={false}
                    aria-label={t('curriculo.skills_show_more_aria', {
                      count: hiddenSkillCount,
                    })}>
                    {t('curriculo.skills_more', { count: hiddenSkillCount })}
                  </button>
                ) : null}
                {skillsExpanded && hiddenSkillCount > 0 ? (
                  <button
                    type='button'
                    className='skill-tag skill-tag-less'
                    onClick={() => setSkillsExpanded(false)}
                    aria-expanded
                    aria-label={t('curriculo.skills_show_less_aria')}>
                    {t('curriculo.skills_less')}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
