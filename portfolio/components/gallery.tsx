"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { categories, photographs, type Category } from "@/lib/portfolio"

export function Gallery() {
  const [category, setCategory] = useState<Category>("All work")
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const visible = photographs.filter(
    (photo) => category === "All work" || photo.category === category
  )
  const active = photographs[selected]
  function openPhoto(id: string) {
    setSelected(photographs.findIndex((photo) => photo.id === id))
    dialog.current?.showModal()
  }
  function step(direction: number) {
    setSelected(
      (current) =>
        (current + direction + photographs.length) % photographs.length
    )
  }
  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="filter-list"
          role="group"
          aria-label="Filter photographs"
        >
          {categories.map((item) => (
            <Button
              key={item}
              variant="ghost"
              aria-pressed={category === item}
              className="filter-button"
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <p aria-live="polite" className="photo-count">
          {String(visible.length).padStart(2, "0")} photographs
        </p>
      </div>
      <div className="photo-grid">
        {visible.map((photo) => (
          <figure className={"photo-card " + photo.shape} key={photo.id}>
            <button
              className="photo-trigger"
              aria-label={"View " + photo.title}
              onClick={() => openPhoto(photo.id)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1000px) 44vw, 42vw"
              />
              <span className="photo-open" aria-hidden="true">
                View photograph ↗
              </span>
            </button>
            <figcaption>
              <h3>{photo.title}</h3>
              <span>{photo.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            step(1)
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            step(-1)
          }
        }}
      >
        <div className="lightbox-top">
          <p id="lightbox-title" aria-live="polite">
            {active.title}
          </p>
          <Button
            variant="ghost"
            className="lightbox-close"
            onClick={() => dialog.current?.close()}
            aria-label="Close photograph"
          >
            Close <span aria-hidden="true">×</span>
          </Button>
        </div>
        <div className="lightbox-image">
          <Image src={active.src} alt={active.alt} fill sizes="90vw" />
        </div>
        <div className="lightbox-bottom">
          <Button
            variant="ghost"
            onClick={() => step(-1)}
            aria-label="Previous photograph"
          >
            ← Previous
          </Button>
          <span>
            {String(selected + 1).padStart(2, "0")} /{" "}
            {String(photographs.length).padStart(2, "0")}
          </span>
          <Button
            variant="ghost"
            onClick={() => step(1)}
            aria-label="Next photograph"
          >
            Next →
          </Button>
        </div>
      </dialog>
    </>
  )
}
