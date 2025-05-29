import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip);

export { gsap, ScrollTrigger, Flip };

// Animation presets
export const animationPresets = {
  // Fade in from bottom
  fadeInUp: {
    from: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    to: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }
  },

  // Fade in from left
  fadeInLeft: {
    from: { 
      opacity: 0, 
      x: -50
    },
    to: { 
      opacity: 1, 
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }
  },

  // Fade in from right
  fadeInRight: {
    from: { 
      opacity: 0, 
      x: 50
    },
    to: { 
      opacity: 1, 
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }
  },

  // Scale in
  scaleIn: {
    from: { 
      opacity: 0, 
      scale: 0.8
    },
    to: { 
      opacity: 1, 
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }
  },

  // Stagger animation for multiple elements
  stagger: {
    amount: 0.3,
    from: "start",
    ease: "power2.out"
  }
};

// Utility functions for common animations
export const animationUtils = {
  // Animate element on scroll
  animateOnScroll: (element: string | Element, animation: any, trigger?: any) => {
    gsap.fromTo(element, animation.from, {
      ...animation.to,
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...trigger
      }
    });
  },

  // Stagger animation for multiple elements
  staggerElements: (elements: string | Element[], animation: any, staggerConfig?: any) => {
    gsap.fromTo(elements, animation.from, {
      ...animation.to,
      stagger: staggerConfig || animationPresets.stagger
    });
  },

  // Hero parallax effect
  parallaxHero: (background: string | Element, content: string | Element) => {
    gsap.to(background, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: background,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.fromTo(content, 
      { opacity: 1, y: 0 },
      {
        opacity: 0.3,
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: content,
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      }
    );
  },

  // Gallery hover effects
  galleryHover: (card: Element) => {
    const image = card.querySelector('img');
    const overlay = card.querySelector('.overlay');
    const content = card.querySelector('.content');

    const tl = gsap.timeline({ paused: true });
    
    tl.to(image, { scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to(overlay, { opacity: 0.8, duration: 0.3 }, 0)
      .to(content, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0.1);

    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());
  },

  // Product card animation
  productCardAnimation: (card: Element) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(card, { 
      y: -10, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      duration: 0.3, 
      ease: "power2.out" 
    });

    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());
  },

  // Counter animation
  animateCounter: (element: Element, endValue: number, duration: number = 2) => {
    gsap.fromTo(element, 
      { innerHTML: 0 },
      {
        innerHTML: endValue,
        duration: duration,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  },

  // Text reveal animation
  textReveal: (element: string | Element) => {
    const splitText = new SplitText(element, { type: "lines,words" });
    
    gsap.fromTo(splitText.words, 
      { 
        opacity: 0, 
        y: 50,
        rotationX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  },

  // Loading animation
  loadingAnimation: () => {
    const tl = gsap.timeline();
    
    tl.to(".loading-bar", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut"
    })
    .to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .set(".loading-screen", { display: "none" });

    return tl;
  },

  // Page transition
  pageTransition: (incoming: Element, outgoing: Element) => {
    const tl = gsap.timeline();
    
    tl.to(outgoing, {
      opacity: 0,
      x: -100,
      duration: 0.3,
      ease: "power2.in"
    })
    .fromTo(incoming, 
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      }
    );

    return tl;
  }
};

// Mobile-friendly animations
export const mobileAnimations = {
  // Reduce motion for mobile devices
  reduceMotion: () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0.1);
    }
  },

  // Touch-friendly gallery swipe
  gallerySwipe: (container: Element, cards: Element[]) => {
    let currentIndex = 0;
    const cardWidth = cards[0].getBoundingClientRect().width;
    
    const updateGallery = (index: number) => {
      gsap.to(container, {
        x: -index * cardWidth,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Touch events for mobile
    let startX = 0;
    let isDragging = false;

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    container.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < cards.length - 1) {
          currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
          currentIndex--;
        }
        
        updateGallery(currentIndex);
        isDragging = false;
      }
    });

    container.addEventListener('touchend', () => {
      isDragging = false;
    });
  }
};

// Performance optimization
export const performanceUtils = {
  // Lazy load animations
  lazyLoadAnimation: (elements: Element[]) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.getAttribute('data-animation');
          
          if (animationType && animationPresets[animationType as keyof typeof animationPresets]) {
            const animation = animationPresets[animationType as keyof typeof animationPresets];
            gsap.fromTo(element, animation.from, animation.to);
          }
          
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  },

  // Debounce scroll events
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};