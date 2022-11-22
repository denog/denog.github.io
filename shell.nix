with (import <nixpkgs> {});

pkgs.mkShell {
 buildInputs = with pkgs; [
    rubyPackages.github-pages
  ];
}


