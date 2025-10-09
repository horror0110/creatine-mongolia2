"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "SAN Performance Creatine",
      description: `🏋️‍♂️ Тренинг бүртээ илүү хүчтэй, илүү том булчинтай болохыг хүсэж байна уу?
Тэгвэл SAN Performance Creatine – таны дасгалын хамгийн сайн хамтрагч!
⚡ 1 уулт = 5 грамм Micronized Creatine Monohydrate
🧪 CreaSolv™ технологи – хурдан, бүрэн шингэлттэй
💧 Fast Mixing – тунадасгүй, амархан уусна
💪 Булчингийн хүч, хэмжээ, тэсвэрийг мэдэгдэхүйц нэмэгдүүлнэ
🔥 Булчингийн сэргэлт ба бэлтгэлийн үр дүнг дээд түвшинд хүргэнэ!
🇺🇸 АНУ-ын чанар, баталгаатай найрлага
✅ 100% цэвэр Creatine Monohydrate
✅ Спортын бүх түвшинд тохиромжтой — фитнесс, хүчний, булчин өсгөх зорилготой хүмүүст`,
      balance: 1,
      servings: 60,
      price: "120000",
      brand: "SAN",
      taste: "Unflavored (амтгүй)",
      photo: ["/creatine.jpg", "/creatine2.jpg"],
      instructions: `Өглөө хоолны өмнө эсвэл дасгалын дараа 1 уулт 200мл усанд уусгаж ууна. Өдөрт 1 уулт хэрэглэнэ.`,
    },
    {
      id: 2,
      name: "ENGN Pre-Workout",
      description: `🔥 EVL ENGN Судас тэлэгч — Бэлтгэлийн өмнөх энергийн хүч!
⚡ 300мг Кофеин + 3г Креатин
💥 Нэг уулт бүр нь анхаарал, хүч чадал, тэсвэрийг зэрэг нэмэгдүүлнэ
🏋️‍♂️ Тэсрэх хүч, төвлөрөл, эрчийг мэдрээрэй
🧠 L-Tyrosine, Theanine, Huperzia – тархины анхаарал, урам зоригийг дэмжинэ
🥤 Усанд амархан уусдаг, амттай формула
`,
      balance: 1,
      servings: 30,
      price: "90000",
      brand: "EVLUTION NUTRITION",
      taste: "Blue raspberry",
      photo: ["/pre.jpeg", "/pre2.jpg"],
      instructions: `Бэлтгэлийн өмнө 200–250мл усанд 1 уулт уусгаж 15–30 минутын өмнө ууна. Унтахын өмнө хэрэглэж болохгүй.`,
    },
    {
      id: 3,
      name: "Mutant Hardcore BCAA",
      description: `🔥 Хүнд бэлтгэлийн дараа булчин чинь өвдөж, ядраад байна уу?
🔥 Илүү хурдан сэргэх, илүү хүчтэй болохыг хүсэж байна уу?
Тэгвэл MUTANT Hardcore BCAA бол яг чамд зориулагдсан амин хүчлийн нэмэлт юм!
⚡ 1 уулт = 9.7g Amino Blend, үүнээс
👉 8g BCAA (Leucine, Isoleucine, Valine)
👉 + Electrolyte – булчингийн ус тэнцвэрийг хадгална
💧 Хурдан уусдаг, амархан шингэдэг, чихэргүй найрлага
💪 Булчингийн сэргэлт, хүч ба тэсвэрийг нэмэгдүүлнэ
🔥 Дасгалын дараах ядаргаа, өвдөлтөөс хамгаална
🥤 Vegan fermented amino – хамгийн цэвэр, чанартай эх үүсвэр`,
      balance: 1,
      servings: 30,
      price: "100000",
      brand: "MUTANT",
      taste: "Ананас",
      photo: ["/bcaa.jpg", "/bcaa2.jpg"],
      instructions: `Дасгалын үеэр эсвэл дараа 1 уулт 300-500мл усанд уусгаж ууна. Өдөрт 1–2 уулт хэрэглэж болно.`,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [zoomedImage, setZoomedImage] = useState("");

  const formatPrice = (price) => {
    return new Intl.NumberFormat("mn-MN").format(price) + "₮";
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const openImageZoom = (imageSrc) => {
    setZoomedImage(imageSrc);
    setShowImageZoom(true);
  };

  const closeImageZoom = () => {
    setShowImageZoom(false);
    setZoomedImage("");
  };

  const handleOrder = () => {
    window.location.href = "tel:90162332";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <div className="relative h-96 md:h-[500px]">
            <img
              src="/mongolia.jpg"
              alt="Mongolia Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-8 md:px-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Америк чанартай бүтээгдэхүүн
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Дэлхийн шилдэг брэндүүдийн спортын тэжээллэг
                  бүтээгдэхүүнүүдийг та бүхэнд хүргэж байна
                </p>
                <button
                  onClick={() => {
                    document.getElementById("products-section").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3 group"
                >
                  <span>Бүтээгдэхүүнтэй танилцах</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products-section" className="scroll-mt-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              Спортын тэжээллэг бүтээгдэхүүн
            </h2>
            <p className="text-slate-600">
              Чанартай бүтээгдэхүүнүүдийг сонгоорой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 h-64">
                    <Carousel className="w-full h-full">
                      <CarouselContent className="h-64">
                        {product.photo.map((photo, index) => (
                          <CarouselItem key={index} className="h-64">
                            <div className="h-full">
                              <img
                                src={photo}
                                alt={`${product.name} ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {product.photo.length > 1 && (
                        <>
                          <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 text-white border-0" />
                          <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 text-white border-0" />
                        </>
                      )}
                    </Carousel>

                    {/* Stock Badge */}
                    {product.balance > 0 && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                        Бэлэн байгаа
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {product.brand}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Амт:</span>
                        <span className="font-medium text-slate-900">
                          {product.taste}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Уулт:</span>
                        <span className="font-medium text-slate-900">
                          {product.servings} удаагийн
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Үнэ</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => openModal(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        Дэлгэрэнгүй
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProduct.photo.map((photo, index) => (
                        <CarouselItem key={index}>
                          <div
                            className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden aspect-square cursor-zoom-in hover:shadow-lg transition-shadow"
                            onClick={() => openImageZoom(photo)}
                          >
                            <img
                              src={photo}
                              alt={`${selectedProduct.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors flex items-center justify-center">
                              <div className="bg-white/90 rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity">
                                <svg
                                  className="w-6 h-6 text-slate-700"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {selectedProduct.photo.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-slate-200" />
                        <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-200" />
                      </>
                    )}
                  </Carousel>
                </div>

                <div className="flex flex-col">
                  <div className="flex-1">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      {selectedProduct.brand}
                    </span>

                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-slate-600 mb-6 leading-relaxed whitespace-pre-line">
                      {selectedProduct.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-3 border-b border-slate-200">
                        <span className="text-slate-600 font-medium">Амт:</span>
                        <span className="text-slate-900 font-semibold">
                          {selectedProduct.taste}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-slate-200">
                        <span className="text-slate-600 font-medium">
                          Уулт:
                        </span>
                        <span className="text-slate-900 font-semibold">
                          {selectedProduct.servings} удаагийн
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-slate-200">
                        <span className="text-slate-600 font-medium">
                          Үлдэгдэл:
                        </span>
                        <span
                          className={`font-semibold ${
                            selectedProduct.balance > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {selectedProduct.balance > 0 ? "Байгаа" : "Дууссан"}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                      <p className="text-sm text-slate-600 mb-2">Үнэ</p>
                      <p className="text-4xl font-bold text-blue-600">
                        {formatPrice(selectedProduct.price)}
                      </p>
                    </div>

                    {/* Usage Instructions */}
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Хэрэглэх заавар
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedProduct.instructions}
                      </p>
                    </div>

                    {/* Delivery Information */}
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                        Хүргэлтийн мэдээлэл
                      </h3>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>
                            <strong>Хүргэлтийн төлбөр:</strong> 5,000₮
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>
                            Хөдөө орон нутаг руу унаанд түргэн шуурхай тавьж
                            өгнө
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleOrder}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>90162332 дугаарт залгаад захиалга өгөх</span>
                  </button>

                  <p className="text-center text-sm text-slate-500 mt-4">
                    Утсаар залган захиалгаа хийнэ үү
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {showImageZoom && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={closeImageZoom}
        >
          <button
            onClick={closeImageZoom}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={zoomedImage}
              alt="Zoomed product"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
