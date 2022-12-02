import React, { useState } from "react";
import { useRouter } from "next/router";
interface Ansprops {
  trigger: Boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  changePhone: Function;
}

function AnsPopUp({ trigger, setTrigger, func }: Ansprops) {
  const [cancel, setCancel] = useState(false);
  func(cancel);
  return trigger ? (
    <main className="noscroll z-30 fixed inset-0 w-full flex justify-center items-center">
      <section className="flex bg-gray-900 w-full bg-opacity-20 justify-center items-center h-screen text-black">
        <div className="bg-white w-3/5 p-8 h-fit relative">
          <button
            className="bg-blue absolute right-8"
            onClick={() => {
              setTrigger(false);
              setCancel(true);
            }}
          >
            Close
          </button>
          <h1 className="text-lg tracking-wide">
            <b>Q: </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus magni dolorum ea voluptate? Dolorum aspernatur quidem
            praesentium quas, et, magni sint ducimus temporibus quibusdam
            expedita similique? Praesentium commodi minus exercitationem.
          </h1>
          <p className="text-xl mt-8 max-h-96 overflow-auto tracking-wide">
            <b>Ans: </b> Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Illum voluptate et nostrum porro eligendi perspiciatis, quae
            at, architecto tenetur est, dolorem odit rem eum a tempora eius
            minima odio laborum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nulla libero quos vitae porro at odit architecto
            sint mollitia vel esse. Alias molestias magnam hic optio assumenda
            fugit dolor? Aspernatur, architecto? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum eligendi doloribus nihil
            autem quod eius hic harum tempora sapiente. Nobis, accusamus
            asperiores nesciunt id quibusdam et reiciendis quis tempora
            voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellat aut quo at obcaecati odio, deserunt accusantium quam
            officiis iste, enim aliquam, blanditiis itaque fugit delectus
            suscipit vitae unde molestias non? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime voluptatibus aperiam id dolor
            eum beatae labore exercitationem fugiat saepe omnis, cumque officiis
            molestias alias, quod cum fugit nam unde porro? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Laboriosam reiciendis atque
            aut, recusandae adipisci sint dicta unde accusamus optio esse,
            soluta ea totam eum, autem maxime. Cupiditate similique id
            optio?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam reiciendis vitae facilis sit deleniti asperiores corporis!
            Perferendis, voluptatum! Qui sapiente, vel quaerat tempora officia
            libero obcaecati consequuntur veniam dignissimos. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Aperiam facere nulla
            quibusdam, fuga nostrum atque maiores? Maiores odio deleniti veniam
            id accusamus, ex doloremque ipsam. Corporis minima eaque sit illo?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            pariatur impedit quam nihil alias sequi praesentium repellat tempora
            nostrum enim veritatis modi maxime perferendis, nesciunt ullam
            aperiam eius iste corporis.
          </p>
        </div>
      </section>
    </main>
  ) : null;
}

export default AnsPopUp;
